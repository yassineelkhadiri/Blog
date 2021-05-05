import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginSecurityComponent } from './components/account/login-security/login-security.component';
import { NotificationsComponent } from './components/account/notifications/notifications.component';
import { PersonainfoComponent } from './components/account/personainfo/personainfo.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'settings',
    component: AccountComponent,
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
