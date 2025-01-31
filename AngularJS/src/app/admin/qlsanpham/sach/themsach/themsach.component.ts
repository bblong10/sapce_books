import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-themsach',
  templateUrl: './themsach.component.html',
  styleUrls: ['./themsach.component.css'],
})
export class ThemsachComponent implements OnInit {
  book: any = {
    bookName: '',
    category: '',
    image: null,
    quantity: null,
    description: '',
  };
  categories: any[] = []; // Danh sách thể loại

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Lấy danh sách thể loại từ API
  loadCategories(): void {
    this.apiService
      .get<any[]>('categories')
      .toPromise()
      .then((response: any) => {
        this.categories = response; // Lưu danh sách thể loại vào biến categories
      });
  }

  validateNumberInput(event: any): void {
    const value = event.target.value;
    // Loại bỏ mọi ký tự không phải là số
    event.target.value = value.replace(/[^0-9]/g, '');
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.book.image = file;
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.book.bookName);
    formData.append('categoryId', this.book.category); // categoryId từ form
    formData.append('quantity', this.book.quantity.toString());
    formData.append('author', 'F. Scott Fitzgerald'); // Hardcoded author for now
    formData.append('isbn', '9780743273565'); // Hardcoded ISBN for now
    formData.append('publishDate', '1925-04-10'); // Hardcoded publishDate
    formData.append('publisher', "Charles Scribner's Sons"); // Hardcoded publisher
    formData.append('isAvailable', 'true'); // Hardcoded availability
    formData.append('description', this.book.description);
    formData.append('image', this.book.image);

    this.apiService.post('books', formData).subscribe({
      next: (response) => {
        console.log('Sách đã được thêm thành công:', response);
        alert('Sách đã được thêm thành công!');
      },
      error: (error) => {
        console.error('Lỗi khi thêm sách:', error);
        alert('Có lỗi xảy ra khi thêm sách.');
      },
    });

    // Reset form
    this.book = {
      bookName: '',
      category: '',
      image: null,
      quantity: null,
      description: '',
    };
  }
}
