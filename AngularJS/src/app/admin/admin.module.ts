import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ThongkeComponent } from './thongke/thongke.component';
import { KhachhangComponent } from './qlnguoidung/khachhang/khachhang.component';
import { NhanvienComponent } from './qlnguoidung/nhanvien/nhanvien.component';
import { SachComponent } from './qlsanpham/sach/sach.component';
import { TheloaiComponent } from './qlsanpham/theloai/theloai.component';
import { QllienheComponent } from './qllienhe/qllienhe.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { QlmuontraComponent } from './qlmuontra/qlmuontra.component';
import { ThemsachComponent } from './qlsanpham/sach/themsach/themsach.component';
import { ThemtheloaiComponent } from './qlsanpham/theloai/themtheloai/themtheloai.component';
import { ThemnhanvienComponent } from './qlnguoidung/nhanvien/themnhanvien/themnhanvien.component';


@NgModule({
  declarations: [
    ThongkeComponent,
    KhachhangComponent,
    NhanvienComponent,
    SachComponent,
    TheloaiComponent,
    QllienheComponent,
    SidebarComponent,
    AdminComponent,
    FooterComponent,
    QlmuontraComponent,
    ThemsachComponent,
    ThemtheloaiComponent,
    ThemnhanvienComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
})
export class AdminModule { }