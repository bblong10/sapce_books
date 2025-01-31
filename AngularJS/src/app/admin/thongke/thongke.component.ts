import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PaginationService } from '../../services/pagination.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css'],
})
export class ThongkeComponent implements OnInit {
  totalBooks: number = 0;
  totalCategories: number = 0;
  totalLoans: number = 0;

  books: any[] = [];
  expiringBooks: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  barChart: any;
  pieChart: any;
  categories: any[] = [];
  loans: any[] = [];

  constructor(
    private apiService: ApiService,
    public paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchBooks();
    this.fetchLoans();
  }

  // Gọi API lấy danh sách thể loại
  fetchCategories(): void {
    this.apiService.get<any[]>('categories').subscribe(
      (categories) => {
        this.categories = categories;
        this.totalCategories = categories.length;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Gọi API lấy danh sách sách
  fetchBooks(): void {
    this.apiService.get<any[]>('books').subscribe(
      (books) => {
        this.books = books.map((book) => ({
          id: book.id,
          name: book.title,
          categoryId: book.categoryId,
          image: `http://localhost:8000/api/v1/books/image/${book.image}`,
        }));
        this.totalBooks = books.length;
        this.renderCharts();
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  // Gọi API lấy danh sách mượn sách
  fetchLoans(): void {
    this.apiService.get<any[]>('loans').subscribe(
      (loans) => {
        this.totalLoans = loans.length;
        this.loans = loans;

        // Lọc sách sắp hết hạn
        const currentDate = new Date();
        this.expiringBooks = loans
          .filter((loan) => {
            const dueDate = new Date(loan.returnDate);
            const diffTime = dueDate.getTime() - currentDate.getTime();
            const diffDays = diffTime / (1000 * 3600 * 24);
            return diffDays < 0 && !loan.isReturned; // Hết hạn trong vòng 7 ngày
          })
          .map((loan) => ({
            id: loan.book.id,
            name: loan.book.title,
            borrower: loan.user.fullName,
            dueDate: new Date(loan.returnDate),
          }));
        this.updateTable();
        this.renderCharts();
      },
      (error) => {
        console.error('Error fetching loans:', error);
      }
    );
  }

  // Cập nhật bảng phân trang
  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(
      this.expiringBooks,
      this.currentPage
    );
  }

  // Chuyển trang
  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  // Tính tổng số trang
  get totalPages(): number {
    return this.paginationService.totalPages(this.expiringBooks);
  }

  // Nhắc nhở sách
  sendReminder(book: any): void {
    const message = `Nhắc nhở: Sách "${book.name}" mượn bởi "${
      book.borrower
    }" cần trả trước ngày ${book.dueDate.toLocaleDateString()}.`;
    alert(message);
  }
  renderCharts(): void {
    // Biểu đồ cột - Số lượng sách theo thể loại
    const loansByDate = this.loans.reduce((acc: any, loan) => {
      const loanDate = new Date(loan.loanDate).toLocaleDateString(); // Lấy ngày mượn dưới dạng chuỗi
      acc[loanDate] = (acc[loanDate] || 0) + 1; // Tăng số lượng sách mượn trong ngày
      return acc;
    }, {});

    // Chuyển đổi dữ liệu thành mảng để vẽ biểu đồ
    const loanDates = Object.keys(loansByDate); // Danh sách các ngày mượn
    const loanCounts = Object.values(loansByDate);
    console.log(loansByDate);
    if (this.barChart) {
      this.barChart.destroy();
    }
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: loanDates,
        datasets: [
          {
            label: 'Số lượng sách mượn',
            data: loanCounts,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Ngày mượn',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Số lượng sách mượn',
            },
            beginAtZero: true,
          },
        },
      },
    });

    // Biểu đồ tròn - Tỷ lệ sách đang mượn
    const loanedBooksCount = this.loans.filter(
      (loan) => !loan.isReturned
    ).length;
    if (this.pieChart) {
      this.pieChart.destroy();
    }
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Sách đã trả', 'Sách chưa trả'],
        datasets: [
          {
            label: 'Tỷ lệ sách ',
            data: [loanedBooksCount, this.loans.length - loanedBooksCount],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
            ],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }
}
