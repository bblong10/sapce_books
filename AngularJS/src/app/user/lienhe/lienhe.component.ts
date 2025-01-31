import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css'],
})
export class LienheComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Khởi tạo FormGroup với các Validator
    this.userForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      idcard: ['', [Validators.required, Validators.pattern('^[0-9]{9,12}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      service: ['', Validators.required],
      description: ['', Validators.required], // Đảm bảo mô tả là bắt buộc
    });
  }

  // Hàm xử lý khi form được submit
  onSubmit() {
    if (this.userForm.valid) {
      const payload = {
        name: this.userForm.value.fullname,
        cardId: this.userForm.value.idcard,
        phoneNumber: this.userForm.value.phone,
        service: this.userForm.value.service,
        description: this.userForm.value.description,
      };

      this.apiService.post('contacts', payload).subscribe(
        (response) => {
          alert('Gửi thông tin thành công!');
          this.userForm.reset(); // Reset form sau khi gửi thành công
        },
        (error) => {
          console.error('Error submitting contact form:', error);
          alert('Không thể gửi thông tin, vui lòng thử lại.');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Hàm kiểm tra ký tự (chỉ cho phép chữ)
  validateText(event: any, field: string) {
    const value = event.target.value;
    const cleanValue = value.replace(/[^a-zA-ZÀ-ỹ\s]/g, ''); // Chỉ cho phép chữ cái và khoảng trắng
    this.userForm.controls[field].setValue(cleanValue);
  }

  // Hàm kiểm tra số (chỉ cho phép nhập số)
  validateNumber(event: any, field: string) {
    const value = event.target.value;
    const cleanValue = value.replace(/[^0-9]/g, ''); // Chỉ cho phép số
    this.userForm.controls[field].setValue(cleanValue);
  }
}
