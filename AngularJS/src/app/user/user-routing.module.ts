import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MuonsachComponent } from './theloai/muonsach/muonsach.component';
import { ChitietsachComponent } from './theloai/chitietsach/chitietsach.component';
import { UserGuard } from '../guards/user.guard';
import { ThongTinCaNhanComponent } from './thongtincanhan/thongtincanhan.component';
import { LichsuComponent } from './lichsu/lichsu.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'trangchu', pathMatch: 'full' },
      { path: 'trangchu', component: TrangchuComponent },
      { path: 'theloai', component: TheloaiComponent },
      { path: 'lienhe', component: LienheComponent },
      { path: 'muonsach/:id', component: MuonsachComponent },
      { path: 'chitietsach/:id', component: ChitietsachComponent },
      { path: 'thongtincanhan', component: ThongTinCaNhanComponent },
      { path: 'lichsu', component: LichsuComponent },
      { path: 'logout', redirectTo: '/auth/logout', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
