import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'lichsu',
  templateUrl: './lichsu.component.html',
  styleUrls: ['./lichsu.component.css'],
})
export class LichsuComponent implements OnInit {
  loans: any[] = []; // Danh sách khoản mượn
  userId: number = 0; // ID người dùng

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Lấy ID người dùng từ localStorage
    this.userId = JSON.parse(localStorage.getItem('user') as string)['id'];
    this.fetchUserLoans(); // Gọi API để lấy danh sách khoản mượn
  }

  // Gọi API để lấy danh sách khoản mượn
  fetchUserLoans(): void {
    this.apiService.get('loans').subscribe(
      (response: any) => {
        // Lọc danh sách khoản mượn theo userId
        this.loans = response.filter(
          (loan: any) => loan.userId === this.userId
        );
      },
      (error) => {
        console.error('Error fetching loans:', error);
        alert('Không thể tải danh sách khoản mượn.');
      }
    );
  }
}
