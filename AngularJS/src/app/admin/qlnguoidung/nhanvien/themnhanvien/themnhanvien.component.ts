import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-themnhanvien',
  templateUrl: './themnhanvien.component.html',
  styleUrls: ['./themnhanvien.component.css'],
})
export class ThemnhanvienComponent {
  employee = {
    fullName: '',
    address: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private apiService: ApiService) {}

  allowOnlyNumbers(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sanitizedValue = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = sanitizedValue;

    if (inputElement.name === 'phoneNumber') {
      this.employee.address = sanitizedValue; // Lưu số CCCD hoặc địa chỉ
    }
  }

  onSubmit() {
    if (this.employee.password !== this.employee.confirmPassword) {
      alert('Mật khẩu không khớp! Vui lòng kiểm tra lại.');
      return;
    }

    // Chuẩn bị payload cho API
    const payload = {
      fullName: this.employee.fullName,
      address: this.employee.address,
      dob: this.employee.dob,
      email: this.employee.email,
      password: this.employee.password,
    };

    // Gửi yêu cầu POST đến API
    this.apiService.post('user', payload).subscribe(
      () => {
        alert(`Nhân viên "${this.employee.fullName}" đã được thêm thành công!`);
        this.resetForm(); // Reset form sau khi thêm thành công
      },
      (error: any) => {
        console.error('Error adding employee:', error);
        alert('Không thể thêm nhân viên, vui lòng thử lại.');
      }
    );
  }

  resetForm(): void {
    this.employee = {
      fullName: '',
      address: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
}
