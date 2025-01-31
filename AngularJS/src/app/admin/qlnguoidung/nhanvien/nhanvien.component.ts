import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css'],
})
export class NhanvienComponent implements OnInit {
  data: any[] = []; // Dữ liệu từ API
  filteredData: any[] = []; // Dữ liệu đã lọc
  searchTerm: string = ''; // Từ khóa tìm kiếm
  currentPage = 1; // Trang hiện tại
  paginatedData: any[] = []; // Dữ liệu phân trang

  // Modal state
  isModalOpen = false;
  selectedEmployee: any = {
    id: null,
    name: '',
    email: '',
    phone: '',
    isAtive: false,
  };
  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Lấy danh sách nhân viên khi khởi tạo
  }
  navigateToAddEmployee(): void {
    this.router.navigate(['/themnhanvien']);
  }
  filterBooks(): void {
    // Sử dụng SearchService để tìm kiếm
    this.filteredData = this.searchService.searchData(
      this.data,
      this.searchTerm
    );
    this.currentPage = 1; // Reset về trang đầu
    this.updateTable();
  }
  // Gọi API để lấy danh sách nhân viên

  openEditModal(employee: any): void {
    this.selectedEmployee = {
      ...employee,
      isAtive: employee.status === 'Đang làm',
    };
    this.isModalOpen = true;
  }

  // Đóng Modal
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedEmployee = {
      id: null,
      name: '',
      email: '',
      phone: '',
      isAtive: false,
    };
  }

  // Gửi API để sửa thông tin
  updateEmployee(): void {
    const payload = {
      fullName: this.selectedEmployee.name,
      email: this.selectedEmployee.email,
      // phone: this.selectedEmployee.phone,
      isAtive: this.selectedEmployee.isAtive,
    };

    this.apiService
      .patch(`user/${this.selectedEmployee.id}`, payload)
      .subscribe(
        () => {
          alert('Cập nhật thông tin nhân viên thành công!');
          this.closeModal();
          this.fetchEmployees(); // Làm mới danh sách
        },
        (error) => {
          console.error('Error updating employee:', error);
          alert('Cập nhật thất bại, vui lòng thử lại.');
        }
      );
  }

  fetchEmployees(): void {
    this.apiService.get<any[]>('user').subscribe(
      (response) => {
        // Xử lý dữ liệu từ API
        console.log(response)
        this.data = response
          .filter((v) => v.role !== 'user')
          .map((employee) => ({
            id: employee.id,
            name: employee.fullName,
            email: employee.email,
            phone: employee.phone,
            status: employee.isAtive ? 'Đang làm' : 'Nghỉ việc',
          }));
        this.filteredData = [...this.data]; // Sao chép dữ liệu để lọc
        this.updateTable();
      },
      (error) => {
        console.error('Error fetching employees:', error);
        alert('Không thể tải danh sách nhân viên.');
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
  filterEmployees(): void {
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

  // Đổi trạng thái giữa "Đang làm" và "Nghỉ việc"
  toggleLock(employee: any): void {
    const updatedStatus =
      employee.status === 'Đang làm' ? 'Nghỉ việc' : 'Đang làm';
    const payload = {
      fullName: employee.name,
      email: employee.email,
      phone: employee.phone,
      isAtive: updatedStatus === 'Đang làm',
    };

    this.apiService.patch(`user/${employee.id}`, payload).subscribe(
      () => {
        alert(
          `Đã ${
            updatedStatus === 'Đang làm' ? 'mở lại' : 'khóa'
          } nhân viên thành công!`
        );
        employee.status = updatedStatus; // Cập nhật trạng thái trong danh sách
        this.updateTable();
      },
      (error) => {
        console.error('Error updating employee status:', error);
        alert(
          `Không thể ${
            updatedStatus === 'Đang làm' ? 'mở lại' : 'khóa'
          } nhân viên.`
        );
      }
    );
  }
}
