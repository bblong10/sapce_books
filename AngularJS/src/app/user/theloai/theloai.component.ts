import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service'; // Import ApiService

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css'],
})
export class TheloaiComponent implements OnInit {
  books: any[] = []; // Danh sách sách từ API
  categories: any[] = []; // Danh sách thể loại từ API
  selectedCategories: any[] = []; // Thể loại đã chọn
  appliedFilters: any[] = []; // Bộ lọc đã áp dụng
  selectedCategory: string = ''; // Thể loại chọn lọc
  selectedSort: string = ''; // Sắp xếp
  searchTerm: string = ''; // Từ khóa tìm kiếm
  selectCategory: any[] = [];
  showMenu: boolean = false; // Hiển thị menu lọc
  showOutsideCategories: boolean = true; // Hiển thị danh sách thể loại ngoài menu

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  // Gọi API để lấy danh sách thể loại
  fetchCategories(): void {
    this.apiService.get<any[]>('categories').subscribe(
      (response) => {
        this.categories = response; // Lưu danh sách thể loại với cả id và tên
        this.fetchBooks();
      },
      (error) => {
        console.error('Error fetching categories:', error);
        alert('Không thể tải danh sách thể loại.');
      }
    );
  }

  // Gọi API để lấy danh sách sách
  fetchBooks(): void {
    this.apiService.get<any[]>('books').subscribe(
      (response) => {
        this.books = response.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          categoryId: book.categoryId,
          category: '', // Sẽ ánh xạ từ categoryId sang tên sau
          status: book.isAvailable ? 'new' : '',
          image: `http://localhost:8000/api/v1/books/image/${book.image}`,
        }));
        this.mapCategoriesToBooks(); // Ánh xạ categoryId sang tên thể loại
      },
      (error) => {
        console.error('Error fetching books:', error);
        alert('Không thể tải danh sách sách.');
      }
    );
  }

  // Ánh xạ categoryId sang tên thể loại
  mapCategoriesToBooks(): void {
    this.books.forEach((book) => {
      const category = this.categories.find(
        (cat) => cat.id === book.categoryId
      );
      console.log(category);
      book.category = category ? category.name : '';
    });
  }

  // Phương thức chuyển hướng đến trang mượn sách
  goToBorrowBook(book: any) {
    this.router.navigate(['/muonsach', book.id]); // Chuyển hướng đến trang mượn sách với ID của sách
  }

  // Phương thức chuyển hướng đến trang chi tiết sách
  goToBookDetail(book: any) {
    this.router.navigate(['/chitietsach', book.id]); // Chuyển hướng đến trang chi tiết sách với ID của sách
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleCategory(categoryId: any, autoApply: boolean) {
    if (this.selectedCategories.includes(categoryId)) {
      this.selectedCategories = this.selectedCategories.filter(
        (item) => item !== categoryId
      );
    } else {
      this.selectedCategories.push(categoryId);
    }

    if (autoApply) {
      this.apply();
    }
  }

  apply() {
    this.appliedFilters = [...this.selectedCategories];
    this.selectCategory = this.categories.filter((category) =>
      this.appliedFilters.includes(category.id.toString())
    );
    this.showMenu = false;
  }

  cancel() {
    this.showMenu = false;
  }

  clearCategory() {
    this.selectedCategory = '';
  }

  removeFilter(filter: string) {
    this.appliedFilters = this.appliedFilters.filter((item) => item !== filter);
    this.selectedCategories = this.selectedCategories.filter(
      (item) => item !== filter
    );
    this.selectCategory = this.selectCategory.filter(
      (item) => item.id !== filter
    );
  }

  clearAll() {
    this.appliedFilters = [];
    this.selectedCategories = [];
    this.selectCategory = [];
  }

  get filteredBooks() {
    let filtered = this.books;

    // Lọc theo categoryId
    // if (this.selectedCategory) {
    //   this.appliedFilters = []
    //   filtered = filtered.filter(
    //     (book) =>
    //       book.categoryId.toString() === this.selectedCategory.toString()
    //   );
    // }

    // Lọc theo appliedFilters (dựa trên categoryId)
    if (this.appliedFilters.length > 0) {
      console.log(this.appliedFilters);
      filtered = filtered.filter((book) =>
        this.appliedFilters.includes(book.categoryId.toString())
      );
    }

    // Sắp xếp
    if (this.selectedSort === 'asc') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.selectedSort === 'desc') {
      filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (this.selectedSort === 'newest') {
      filtered = filtered.filter((book) => book.status === 'new');
    }

    // Lọc theo từ khóa tìm kiếm
    if (this.searchTerm) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  onSearchChange() {
    // Cập nhật từ khóa tìm kiếm, tự động lọc sách
  }

  // Phương thức thay đổi thứ tự sắp xếp
  setSort(sort: string) {
    this.selectedSort = sort;
  }
}
