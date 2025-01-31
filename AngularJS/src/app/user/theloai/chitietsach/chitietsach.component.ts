import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-chitietsach',
  templateUrl: './chitietsach.component.html',
  styleUrls: ['./chitietsach.component.css'],
})
export class ChitietsachComponent implements OnInit {
  book: any = null; // Dữ liệu chi tiết sách
  loading: boolean = true; // Trạng thái tải dữ liệu
  errorMessage: string | null = null; // Thông báo lỗi

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Lấy ID sách từ route
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.fetchBookDetails(bookId);
    } else {
      this.errorMessage = 'Không tìm thấy thông tin sách.';
      this.loading = false;
    }
  }

  // Gọi API để lấy thông tin chi tiết sách
  fetchBookDetails(bookId: string): void {
    this.apiService.get(`books/${bookId}`).subscribe(
      (response: any) => {
        this.book = {
          ...response,
          image: `http://localhost:8000/api/v1/books/image/${response.image}`, // Xử lý đường dẫn ảnh
        };
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching book details:', error);
        this.errorMessage = 'Không thể tải thông tin sách.';
        this.loading = false;
      }
    );
  }

  // Hàm chuyển đến trang mượn sách
  goToBorrowBook(): void {
    if (this.book) {
      this.router.navigate(['/muonsach', this.book.id]); // Chuyển hướng đến trang mượn sách
    }
  }
}
