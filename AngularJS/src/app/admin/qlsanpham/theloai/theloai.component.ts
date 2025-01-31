import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError } from 'rxjs/operators'; // Import catchError for error handling
import { of } from 'rxjs'; // Import 'of' to handle errors gracefully
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css'],
})
export class TheloaiComponent implements OnInit {
  data: any[] = []; // Dữ liệu thể loại sách
  filteredData: any[] = []; // Dữ liệu đã lọc
  searchTerm: string = ''; // Từ khóa tìm kiếm
  currentPage = 1;
  paginatedData: any[] = [];
  selectedCategory: any = null; // Thể loại được chọn để sửa
  updatedCategoryName: string = ''; // Tên thể loại mới

  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService,
    private router: Router,
    private readonly apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchCategories(); // Lấy danh sách thể loại từ API khi component khởi tạo
  }

  fetchCategories(): void {
    // Gọi API để lấy danh sách thể loại
    this.apiService
      .get<any[]>('categories')
      .pipe(
        catchError((error) => {
          console.error('Error fetching categories:', error);
          return of([]); // Trả về mảng rỗng nếu có lỗi
        })
      )
      .subscribe((response) => {
        this.data = response; // Gán dữ liệu nhận được từ API vào data
        this.filteredData = [...this.data]; // Cập nhật filteredData
        this.updateTable(); // Cập nhật bảng sau khi lấy dữ liệu
      });
  }

  updateTable(): void {
    // Cập nhật dữ liệu phân trang dựa trên filteredData
    this.paginatedData = this.paginationService.paginate(
      this.filteredData,
      this.currentPage
    );
  }

  get visiblePages(): (number | string)[] {
    // Lấy danh sách các trang hiển thị
    return this.paginationService.getVisiblePages(
      this.currentPage,
      this.totalPages
    );
  }

  changePage(page: number | string): void {
    // Chuyển trang
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  filterBooks(): void {
    // Sử dụng SearchService để lọc dữ liệu
    this.filteredData = this.searchService.searchData(
      this.data,
      this.searchTerm
    );
    this.currentPage = 1; // Reset về trang đầu khi tìm kiếm
    this.updateTable();
  }

  get totalPages(): number {
    // Tính tổng số trang
    return this.paginationService.totalPages(this.filteredData);
  }

  // Phương thức chuyển hướng đến trang thêm thể loại
  navigateToAddCategory(): void {
    this.router.navigate(['/themtheloai']);
  }

  delete(id: string) {
    if (confirm('Bạn có chắc chắn muốn xoá?')) {
      this.apiService
        .delete('categories/' + id)
        .toPromise()
        .then((res) => {
          console.log(res);
          this.fetchCategories();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // Phương thức mở modal sửa thể loại
  openEditCategoryModal(category: any): void {
    this.selectedCategory = category;
    this.updatedCategoryName = category.name;
  }

  // Phương thức gửi yêu cầu PUT để sửa thể loại
  updateCategory(): void {
    if (this.updatedCategoryName.trim()) {
      const updatedCategory = {
        name: this.updatedCategoryName,
      };

      this.apiService
        .patch(`categories/${this.selectedCategory.id}`, updatedCategory)
        .pipe(
          catchError((error) => {
            console.error('Error updating category:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!');
            return of(null); // Xử lý lỗi một cách nhẹ nhàng
          })
        )
        .subscribe((response) => {
          if (response) {
            alert(`Thể loại "${this.updatedCategoryName}" đã được cập nhật!`);
            this.fetchCategories(); // Cập nhật lại danh sách thể loại
            this.selectedCategory = null; // Đóng modal sau khi cập nhật thành công
            this.updatedCategoryName = ''; // Reset input
          }
        });
    } else {
      alert('Tên thể loại không hợp lệ!');
    }
  }
}
