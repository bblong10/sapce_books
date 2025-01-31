import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent {
  constructor(private router: Router) {
    this.logout();
  }

  logout() {
    const confirmLogout = window.confirm('Bạn có chắc muốn đăng xuất?');

    if (confirmLogout) {
      // Nếu người dùng xác nhận đăng xuất
      localStorage.clear();
      sessionStorage.clear();

      // Điều hướng đến trang đăng nhập
      this.router.navigate(['/auth/signin']);
    } else {
      // Nếu người dùng hủy, quay lại trang trước đó trong lịch sử
      window.history.back(); // Quay lại trang trước đó
    }
  }
}
