import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'trangchu-root',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css'],
})
export class TrangchuComponent implements OnInit {
  books: any[] = []; // Danh sách sách từ API

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchBooks(); // Gọi API khi khởi tạo component
  }
  goToBookDetail(book: any) {
    this.router.navigate(['/chitietsach', book.id]); // Chuyển hướng đến trang chi tiết sách với ID của sách
  }

  // Gọi API để lấy danh sách sách
  fetchBooks(): void {
    this.apiService.get<any[]>('books').subscribe(
      (response: any) => {
        // Xử lý dữ liệu từ API
        this.books = response.map((book: any) => ({
          id: book.id,
          title: book.title,
          description: book.category, // Assuming `category` holds the description
          image: `http://localhost:8000/api/v1/books/image/${book.image}`, // Assuming image is served via this path
        }));
        this.books = this.books.reverse().slice(0, 8);
      },
      (error: any) => {
        console.error('Error fetching books:', error);
        alert('Không thể tải danh sách sách.');
      }
    );
  }

  // Hàm chuyển hướng khi nhấn nút
  goToCategory() {
    this.router.navigate(['/theloai']); // Chuyển đến trang thể loại
  }
}