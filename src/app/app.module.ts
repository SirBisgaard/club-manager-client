import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Root Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Pages */
import { PageNotFoundPage } from './pages/page-not-found/page-not-found-page.component';
import { MemberLoginPage } from './pages/member/login/member-login-page.component';
import { MemberHomePage } from './pages/member/home/member-home-page.component';
import { UserLoginPage } from './pages/user/login/user-login-page.component';
import { UserHomePage } from './pages/user/home/user-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundPage,
    MemberLoginPage,
    MemberHomePage,
    UserLoginPage,
    UserHomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
