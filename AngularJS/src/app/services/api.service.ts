import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/v1/'; // Đảm bảo bạn đã cấu hình API URL trong environment

  constructor(private http: HttpClient) {}

  // Gọi GET API với headers (bao gồm accessToken)
  get<T>(url: string, params?: HttpParams): Observable<T> {
    const headers = this.createHeaders();
    return this.http.get<T>(`${this.apiUrl}${url}`, { headers, params });
  }

  // Gọi POST API với body và headers
  post<T>(url: string, body: any): Observable<T> {
    const headers = this.createHeaders();
    return this.http.post<T>(`${this.apiUrl}${url}`, body, { headers });
  }

  // Gọi PUT API với body và headers
  put<T>(url: string, body: any): Observable<T> {
    const headers = this.createHeaders();
    return this.http.put<T>(`${this.apiUrl}${url}`, body, { headers });
  }
  patch<T>(url: string, body: any): Observable<T> {
    const headers = this.createHeaders();
    return this.http.patch<T>(`${this.apiUrl}${url}`, body, { headers });
  }
  // Gọi DELETE API với headers
  delete<T>(url: string): Observable<T> {
    const headers = this.createHeaders();
    return this.http.delete<T>(`${this.apiUrl}${url}`, { headers });
  }

  // Hàm tạo headers bao gồm accessToken
  private createHeaders(): HttpHeaders {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken'); // Lấy token từ localStorage hoặc sessionStorage
      return new HttpHeaders({
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${String(token)}`, // Thêm token vào header Authorization
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
