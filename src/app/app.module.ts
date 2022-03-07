import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavBarComponent } from './component/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SubHeaderComponent } from './component/layout/sub-header/sub-header.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CartDetailsComponent } from './component/cart-details/cart-details.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { CartService } from './service/cart/cart.service';
import { CourseServiceService } from './service/course/course-service.service';
import { DashboardLayoutComponent } from './component/layout/dashboard-layout/dashboard-layout.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    FooterComponent,
    SubHeaderComponent,
    CourseListComponent,
    CartDetailsComponent,
    PaginationComponent,
    DashboardLayoutComponent,
    ShoppingCartComponent,
    CourseDetailsComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CartService, CourseServiceService, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
