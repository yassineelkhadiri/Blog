import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginSecurityComponent } from './components/account/login-security/login-security.component';
import { NotificationsComponent } from './components/account/notifications/notifications.component';
import { PersonainfoComponent } from './components/account/personainfo/personainfo.component';

const routes: Routes = [
  {
    path: 'account',
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
