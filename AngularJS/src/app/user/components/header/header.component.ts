import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropdownOpen: boolean = false;

  constructor(
    private readonly authService: AuthService, // Dịch vụ xác thực người dùng
    private router: Router // Điều hướng router
  ) {}

  ngOnInit(): void {}

  // Toggle mở/đóng dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isLogoutModalVisible = false; // Hiển thị/hủy modal đăng xuất

  // Mở modal đăng xuất
  openLogoutModal() {
    this.isLogoutModalVisible = true;
  }

  // Xử lý đăng xuất
  logout() {
    console.log('okoko'); // Debug: Xác nhận đã gọi hàm
    this.authService.logout(); // Gọi hàm logout từ AuthService
    this.router.navigate(['/auth/signin']); // Điều hướng đến trang đăng nhập
  }
}
