import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-muonsach',
  templateUrl: './muonsach.component.html',
  styleUrls: ['./muonsach.component.css'],
})
export class MuonsachComponent implements OnInit {
  borrowForm: FormGroup;
  bookDetails: any = null; // Thông tin sách
  userData: any = null; // Thông tin người dùng
  isLoading: boolean = true; // Trạng thái tải dữ liệu

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.borrowForm = this.fb.group({
      borrowDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id'); // Lấy ID sách từ URL
    if (bookId) {
      this.fetchBookDetails(bookId);
    }
    this.userData = JSON.parse(localStorage.getItem('user') || '{}'); // Lấy thông tin người dùng từ localStorage
  }

  // Gọi API lấy thông tin chi tiết của sách
  fetchBookDetails(bookId: string): void {
    this.apiService.get(`books/${bookId}`).subscribe(
      (response: any) => {
        this.bookDetails = response; // Lưu thông tin sách
        this.isLoading = false; // Hoàn tất tải
      },
      (error) => {
        console.error('Error fetching book details:', error);
        alert('Không thể tải thông tin sách.');
        this.isLoading = false; // Tắt trạng thái tải
      }
    );
  }

  // Gọi API đăng ký mượn sách
  onSubmit(): void {
    if (this.bookDetails.quantity <= 0) {
      alert('Sách bạn chọn đã hết');
    }
    if (this.borrowForm.valid) {
      const payload = {
        userId: this.userData?.id,
        bookId: this.bookDetails?.id,
        loanDate: this.borrowForm.value.borrowDate,
        returnDate: this.borrowForm.value.returnDate,
        isReturned: false,
      };

      this.apiService.post('loans', payload).subscribe(
        (response) => {
          alert('Đăng ký mượn sách thành công!');
          console.log('Loan response:', response);

          this.fetchBookDetails(this.bookDetails.id);
        },
        (error) => {
          console.error('Error creating loan:', error);
          alert('Đăng ký mượn sách thất bại.');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
