import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})

export class SidebarComponent implements OnInit {
  adminName: string = 'Admin - SB';
  isDropdownOpen = false;
  isClicked = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminName = this.getAdminName();
  }

  // Hàm giả lập để lấy tên của admin
  getAdminName(): string {
    return 'Admin - SB';
  }

  // Toggle trạng thái mở/đóng dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Toggle trạng thái click
  toggleClick() {
    this.isClicked = !this.isClicked;
  }

  // Hàm đăng xuất
  logout() {
    console.log('okoko');
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }
}
