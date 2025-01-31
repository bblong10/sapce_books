import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  rowsPerPage = 4;

  constructor() {}

  // Hàm phân trang dữ liệu
  paginate(data: any[], currentPage: number): any[] {
    const start = (currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    return data.slice(start, end);
  }

  // Hàm lấy tổng số trang
  totalPages(data: any[]): number {
    return Math.ceil(data.length / this.rowsPerPage);
  }

  // Hàm tính các trang cần hiển thị
  getVisiblePages(currentPage: number, totalPages: number): (number | string)[] {
    const maxVisiblePages = 5; // Số trang hiển thị tối đa
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) {
        pages.push(1, '...');
      } else {
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...', totalPages);
      } else {
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  }
}
