import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'thongtincanhan',
  templateUrl: './thongtincanhan.component.html',
  styleUrls: ['./thongtincanhan.component.css'],
})
export class ThongTinCaNhanComponent implements OnInit {
  user: any = {}; // Biến lưu thông tin người dùng
  userId: number = 0; // ID người dùng từ URL

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Lấy ID từ URL
    this.userId = JSON.parse(localStorage.getItem('user') as string)['id'];
    this.fetchUserProfile(); // Gọi API để lấy thông tin người dùng
  }

  // Gọi API để lấy thông tin người dùng
  fetchUserProfile(): void {
    this.apiService.get(`user/${this.userId}`).subscribe(
      (response) => {
        this.user = response; // Gán dữ liệu từ API vào biến user
      },
      (error) => {
        console.error('Error fetching user profile:', error);
        alert('Không thể tải thông tin người dùng.');
      }
    );
  }
}
