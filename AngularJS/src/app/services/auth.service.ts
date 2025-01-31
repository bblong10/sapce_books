import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  constructor(private readonly apiService: ApiService) {}
  // Đăng nhập
  async login(email: string, password: string) {
    try {
      const res: any = await this.apiService
        .post('auth/login', { email, password })
        .toPromise();
      console.log(res);
      if (res) {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('accessToken', res.accessToken);

        return true;
      }
      // if (email === 'admin' && password === 'admin') {
      // this.isLoggedIn = true;
      //   localStorage.setItem('user', JSON.stringify({ email: 'admin' }));
      //   return true;
      // }
      return false;
    } catch (error) {
      return false;
    }
  }

  // Đăng xuất
  logout() {
    this.isLoggedIn = false;
    localStorage.clear();
  }

  // Kiểm tra xem người dùng đã đăng nhập chưa
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  checkAdmin() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user.role === 'admin') return true;
    return false;
  }

  // Đăng ký người dùng mới
  async register(user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    try {
      await this.apiService
        .post('user', {
          fullName: `${user.firstName} ${user.lastName}`,
          email: user.email,
          password: user.password,
          address: 'string',
          dob: new Date(),
        })
        .toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }
}
