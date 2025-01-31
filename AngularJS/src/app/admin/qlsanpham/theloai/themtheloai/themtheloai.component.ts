import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient để gọi API
import { Router } from '@angular/router'; // Nếu bạn muốn chuyển hướng sau khi thêm thể loại
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-themtheloai',
  templateUrl: './themtheloai.component.html',
  styleUrls: ['./themtheloai.component.css'],
})
export class ThemtheloaiComponent {
  newCategory: string = ''; // Biến để lưu tên thể loại mới

  constructor(
    private readonly apiService: ApiService,
    private router: Router // Inject Router nếu muốn chuyển hướng sau khi thêm thể loại
  ) {}

  // Phương thức gửi yêu cầu POST để thêm thể loại mới
  onSubmit() {
    if (this.newCategory.trim()) {
      // Tạo đối tượng dữ liệu để gửi
      const categoryData = { name: this.newCategory };

      // Gửi yêu cầu POST đến API để thêm thể loại
      this.apiService.post('categories', categoryData).subscribe(
        (response) => {
          // Hiển thị thông báo khi thêm thể loại thành công
          alert(`Thể loại "${this.newCategory}" đã được thêm thành công!`);

          // Làm sạch input sau khi thêm thành công
          this.newCategory = '';

          // Chuyển hướng về trang danh sách thể loại hoặc trang khác (tuỳ chọn)
          this.router.navigate(['/qlsanpham/theloai']);
        },
        (error) => {
          // Hiển thị thông báo lỗi khi thêm thể loại không thành công
          console.error('Error adding category:', error);
          alert('Có lỗi xảy ra, vui lòng thử lại!');
        }
      );
    } else {
      alert('Vui lòng nhập tên thể loại!');
    }
  }
}
