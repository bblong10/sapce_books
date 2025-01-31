import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-sach',
  templateUrl: './sach.component.html',
  styleUrls: ['./sach.component.css'],
})
export class SachComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  searchTerm: string = '';
  currentPage = 1;
  paginatedData: any[] = [];
  categories: any[] = []; // Biến lưu danh mục

  // Modal state
  isModalVisible = false;
  editBook: any = {}; // Holds data for the book being edited

  constructor(
    private readonly apiService: ApiService,
    private paginationService: PaginationService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
    this.fetchCategories(); // Gọi API lấy danh mục
  }

  // Lấy danh mục
  fetchCategories(): void {
    this.apiService.get<any[]>('categories').subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Lấy danh sách sách
  fetchBooks(): void {
    this.apiService
      .get<any[]>('books')
      .toPromise()
      .then((response: any) => {
        this.data = response;
        this.filteredData = [...this.data];
        this.updateTable();
      })
      .catch((err) => {
        console.error('Failed to fetch books:', err);
      });
  }

  // Cập nhật bảng sau khi phân trang
  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(
      this.filteredData,
      this.currentPage
    );
  }

  // Cập nhật bảng trang hiện tại
  get visiblePages(): (number | string)[] {
    return this.paginationService.getVisiblePages(
      this.currentPage,
      this.totalPages
    );
  }

  // Thay đổi trang phân trang
  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  // Lọc sách theo từ khoá tìm kiếm
  filterBooks(): void {
    this.filteredData = this.searchService.searchData(
      this.data,
      this.searchTerm
    );
    this.currentPage = 1;
    this.updateTable();
  }

  // Tổng số trang
  get totalPages(): number {
    return this.paginationService.totalPages(this.filteredData);
  }

  // Mở Modal để chỉnh sửa sách
  openEditModal(book: any): void {
    this.editBook = { ...book }; // Copy book data into editBook
    this.isModalVisible = true; // Show modal
  }

  // Đóng Modal
  closeModal(): void {
    this.isModalVisible = false;
    this.editBook = {}; // Reset book data
  }

  // Xử lý sự kiện chọn ảnh
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.editBook.image = file; // Lưu ảnh mới vào đối tượng editBook
    }
  }

  // Xoá sách
  deleteBook(id: string) {
    if (confirm('Bạn có chắc chắn muốn xoá?')) {
      this.apiService
        .delete('books/' + id)
        .toPromise()
        .then((res) => {
          console.log(res);
          this.fetchBooks();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // Cập nhật sách qua API PATCH
  updateBook(): void {
    const formData = new FormData();
    formData.append('title', this.editBook.title);
    formData.append('author', this.editBook.author);
    formData.append('isbn', this.editBook.isbn);
    formData.append('quantity', this.editBook.quantity);
    formData.append('publisher', this.editBook.publisher);
    formData.append('publishDate', this.editBook.publishDate);
    formData.append('isAvailable', this.editBook.isAvailable);
    formData.append('categoryId', this.editBook.categoryId);

    // Thêm ảnh nếu có
    if (this.editBook.image && typeof this.editBook.image !== 'string') {
      formData.append('image', this.editBook.image, this.editBook.image.name);
    }

    // Gửi yêu cầu PATCH
    this.apiService
      .put(`books/${this.editBook.id}`, formData)
      .pipe(
        catchError((error) => {
          console.error('Error updating book:', error);
          return [];
        })
      )
      .subscribe((response: any) => {
        this.fetchBooks(); // Re-fetch books after update
        this.closeModal(); // Close modal
      });
  }

  // Thay đổi trạng thái sách
  toggleStatus(row: any): void {
    row.isAvailable = !row.isAvailable; // Chuyển đổi trạng thái
    const formData = new FormData();
    formData.append('title', row.title);
    formData.append('author', row.author);
    formData.append('isbn', row.isbn);
    formData.append('quantity', row.quantity);
    formData.append('publisher', row.publisher);
    formData.append('publishDate', row.publishDate);
    formData.append('isAvailable', row.isAvailable);
    formData.append('categoryId', row.categoryId);

    // Gửi yêu cầu PATCH để cập nhật trạng thái
    this.apiService
      .put(`books/${row.id}`, formData)
      .pipe(
        catchError((error) => {
          console.error('Error updating book:', error);
          return [];
        })
      )
      .subscribe((response: any) => {
        this.fetchBooks(); // Re-fetch books after update
        this.closeModal(); // Close modal
      });
  }

  // Điều hướng tới trang thêm sách
  navigateToAddBook(): void {
    this.router.navigate(['/themsach']);
  }
}
