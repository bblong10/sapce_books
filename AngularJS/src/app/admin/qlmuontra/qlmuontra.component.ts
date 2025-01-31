import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationService } from '../../services/pagination.service';
import { SearchService } from '../../services/search.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-qlmuontra',
  templateUrl: './qlmuontra.component.html',
  styleUrls: ['./qlmuontra.component.css'],
})
export class QlmuontraComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  searchTerm: string = '';
  currentPage = 1;
  paginatedData: any[] = [];

  // Modal state
  isModalOpen = false;
  selectedLoan: any = {
    id: null,
    loanDate: '',
    returnDate: '',
    isReturned: false,
  };

  constructor(
    private readonly apiService: ApiService,
    private paginationService: PaginationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.apiService.get<any[]>('loans').subscribe(
      (response) => {
        this.data = response.map((loan) => ({
          id: loan.id,
          name: loan.user.fullName,
          book: loan.book.title,
          loanDate: loan.loanDate,
          returnDate: loan.returnDate,
          isReturned: loan.isReturned,
        }));
        this.filteredData = [...this.data];
        this.updateTable();
      },
      (error) => {
        console.error('Error fetching loan data:', error);
      }
    );
  }

  // Mở modal sửa dữ liệu
  openEditModal(loan: any): void {
    this.selectedLoan = { ...loan };
    this.isModalOpen = true;
  }

  // Đóng modal
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedLoan = {
      id: null,
      loanDate: '',
      returnDate: '',
      isReturned: false,
    };
  }

  // Gửi API PATCH để cập nhật thông tin
  updateLoan(): void {
    const payload = {
      loanDate: this.selectedLoan.loanDate,
      returnDate: this.selectedLoan.returnDate,
      isReturned: this.selectedLoan.isReturned === 'true',
    };

    this.apiService.patch(`loans/${this.selectedLoan.id}`, payload).subscribe(
      () => {
        alert('Cập nhật thông tin thành công!');
        this.closeModal();
        this.fetchLoans(); // Reload data
      },
      (error) => {
        console.error('Error updating loan:', error);
        alert('Cập nhật thất bại, vui lòng thử lại.');
      }
    );
  }

  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(
      this.filteredData,
      this.currentPage
    );
  }

  filterBooks(): void {
    this.filteredData = this.searchService.searchData(
      this.data,
      this.searchTerm
    );
    this.currentPage = 1;
    this.updateTable();
  }

  get visiblePages(): (number | string)[] {
    return this.paginationService.getVisiblePages(
      this.currentPage,
      this.totalPages
    );
  }

  deleteLoan(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa thông tin này?')) {
      this.apiService.delete(`loans/${id}`).subscribe(
        () => {
          alert('Xóa thành công!');
          this.fetchLoans(); // Reload data sau khi xóa
        },
        (error) => {
          console.error('Error deleting loan:', error);
          alert('Xóa thất bại, vui lòng thử lại.');
        }
      );
    }
  }

  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  get totalPages(): number {
    return this.paginationService.totalPages(this.filteredData);
  }
}
