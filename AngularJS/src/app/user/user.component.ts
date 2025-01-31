import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  isSticky: boolean = false; // Điều kiện kiểm soát lớp 'sticky'

  onScroll(event: Event): void {
    const scrollTop = (event.target as HTMLElement).scrollTop; // Lấy vị trí cuộn
    this.isSticky = scrollTop > 0; // Nếu cuộn, bật 'sticky'
}
}
