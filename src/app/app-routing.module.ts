import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberHomePage } from './pages/member/home/member-home-page.component';
import { MemberLoginPage } from './pages/member/login/member-login-page.component';
import { PageNotFoundPage } from './pages/page-not-found/page-not-found-page.component';
import { UserHomePage } from './pages/user/home/user-home-page.component';
import { UserLoginPage } from './pages/user/login/user-login-page.component';

const routes: Routes = [
  { path: 'login', component: MemberLoginPage },
  { path: 'home', component: MemberHomePage },
  { path: 'admin/login', component: UserLoginPage },
  { path: 'admin/home', component: UserHomePage },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundPage },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
