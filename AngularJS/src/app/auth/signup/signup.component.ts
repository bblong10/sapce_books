import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(readonly authService: AuthService, readonly router: Router) {}
  async onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }

    // Gửi dữ liệu đăng ký tới backend (hoặc giả lập nếu chưa có backend)
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    // Giả lập đăng ký (có thể thay thế bằng gọi API backend để đăng ký)
    if (await this.authService.register(user)) {
      alert('Đăng ký thành công!');
      this.router.navigate(['/auth/signin']);
    } else {
      alert('Đăng ký thất bại!');
    }
  }
}
