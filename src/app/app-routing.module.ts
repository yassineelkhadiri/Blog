import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { LoginSecurityComponent } from './components/account/login-security/login-security.component';
import { NotificationsComponent } from './components/account/notifications/notifications.component';
import { PersonainfoComponent } from './components/account/personainfo/personainfo.component';
import { ArticleComponent } from './components/article/article.component';
import { BasicformComponent } from './components/basicform/basicform.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './components/home/home.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'article', component: ArticleComponent, canActivate: [AuthGuard] },

  {
    path: 'insertinfo',
    component: BasicformComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'newpost', component: NewpostComponent }],
  },
  {
    path: 'settings',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'personalinfo', component: PersonainfoComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'login-security', component: LoginSecurityComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
