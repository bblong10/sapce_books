import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MuonsachComponent } from './theloai/muonsach/muonsach.component';
import { ChitietsachComponent } from './theloai/chitietsach/chitietsach.component';
import { LichsuComponent } from './lichsu/lichsu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserComponent,
    TrangchuComponent,
    TheloaiComponent,
    LienheComponent,
    MuonsachComponent,
    ChitietsachComponent,
    LichsuComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
