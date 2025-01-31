import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-qllienhe',
  templateUrl: './qllienhe.component.html',
  styleUrls: ['./qllienhe.component.css'],
})
export class QllienheComponent implements OnInit {
  data: any[] = []; // Dữ liệu từ API
  filteredData: any[] = []; // Dữ liệu đã lọc
  searchTerm: string = ''; // Từ khóa tìm kiếm
  currentPage = 1; // Trang hiện tại
  paginatedData: any[] = []; // Dữ liệu phân trang

  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchContacts(); // Lấy danh sách liên hệ khi khởi tạo
  }

  // Gọi API để lấy danh sách liên hệ
  fetchContacts(): void {
    this.apiService.get<any[]>('contacts').subscribe(
      (response) => {
        // Xử lý dữ liệu từ API
        this.data = response.map((contact) => ({
          id: contact.id,
          name: contact.name,
          phone: contact.phoneNumber,
          content: contact.description,
          status: 'Chưa giải quyết', // Trạng thái mặc định
        }));
        this.filteredData = [...this.data]; // Sao chép dữ liệu để lọc
        this.updateTable();
      },
      (error) => {
        console.error('Error fetching contacts:', error);
        alert('Không thể tải danh sách liên hệ.');
      }
    );
  }

  // Cập nhật bảng dữ liệu
  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(
      this.filteredData,
      this.currentPage
    );
  }

  // Lọc dữ liệu theo từ khóa tìm kiếm
  filterContacts(): void {
    this.filteredData = this.searchService.searchData(
      this.data,
      this.searchTerm
    );
    this.currentPage = 1; // Reset về trang đầu
    this.updateTable();
  }

  // Xác nhận trạng thái của liên hệ
  confirmStatus(row: any): void {
    row.status = row.status === 'Giải quyết' ? 'Chưa giải quyết' : 'Giải quyết';
  }

  // Lấy danh sách các trang hiển thị
  get visiblePages(): (number | string)[] {
    return this.paginationService.getVisiblePages(
      this.currentPage,
      this.totalPages
    );
  }

  // Chuyển trang
  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  // Tính tổng số trang
  get totalPages(): number {
    return this.paginationService.totalPages(this.filteredData);
  }
}
