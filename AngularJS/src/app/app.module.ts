import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthInterceptor } from './intercepters/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    UserModule,
  ],
  providers: [
    ApiService, // Đăng ký ApiService
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Đăng ký interceptor để thêm token
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
