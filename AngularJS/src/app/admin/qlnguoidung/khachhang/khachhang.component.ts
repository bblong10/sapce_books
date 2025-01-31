import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css'],
})
export class KhachhangComponent implements OnInit {
  data: any[] = []; // Dữ liệu từ API
  filteredData: any[] = []; // Dữ liệu đã lọc
  searchTerm: string = ''; // Từ khóa tìm kiếm
  currentPage = 1; // Trang hiện tại
  paginatedData: any[] = []; // Dữ liệu phân trang

  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchUsers(); // Lấy danh sách người dùng khi khởi tạo
  }

  // Gọi API để lấy danh sách người dùng
  fetchUsers(): void {
    this.apiService.get<any[]>('user').subscribe(
      (response) => {
        // Xử lý dữ liệu từ API
        this.data = response.filter(v=> v.role === "user").map((user) => ({
          id: user.id,
          name: user.fullName,
          email: user.email,
          dob: this.formatDate(user.dob),
          address: user.address,
          isAtive: user.isAtive ? 'Mở' : 'Khóa',
        }));
        this.filteredData = [...this.data]; // Sao chép dữ liệu để lọc
        this.updateTable();
      },
      (error) => {
        console.error('Error fetching users:', error);
        alert('Không thể tải danh sách người dùng.');
      }
    );
  }

  // Định dạng ngày sinh (YYYY-MM-DD -> DD/MM/YYYY)
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN');
  }

  // Cập nhật bảng dữ liệu
  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(
      this.filteredData,
      this.currentPage
    );
  }

  // Lọc dữ liệu theo từ khóa tìm kiếm
  filterUsers(): void {
    this.filteredData = this.searchService.searchData(
      this.data,
      this.searchTerm
    );
    this.currentPage = 1; // Reset về trang đầu
    this.updateTable();
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

  // Đổi trạng thái giữa "Mở" và "Khóa"
  toggleLock(user: any): void {
    const updatedStatus = user.isAtive === 'Mở' ? 'Khóa' : 'Mở';
    const payload = {
      fullName: user.name,
      address: user.address,
      dob: user.dob.split('/').reverse().join('-'), // Chuyển từ DD/MM/YYYY sang YYYY-MM-DD
      email: user.email,
      isAtive: updatedStatus === 'Mở',
    };

    this.apiService.patch(`user/${user.id}`, payload).subscribe(
      () => {
        alert(
          `Đã ${
            updatedStatus === 'Mở' ? 'mở khóa' : 'khóa'
          } người dùng thành công!`
        );
        user.isAtive = updatedStatus; // Cập nhật trạng thái trong danh sách
        this.updateTable();
      },
      (error) => {
        console.error('Error updating user status:', error);
        alert(
          `Không thể ${updatedStatus === 'Mở' ? 'mở khóa' : 'khóa'} người dùng.`
        );
      }
    );
  }
}
