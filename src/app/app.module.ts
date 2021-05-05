import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { ArticleOverviewComponent } from './components/article-overview/article-overview.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleComponent } from './components/article/article.component';
import { AuthorOverviewComponent } from './components/author-overview/author-overview.component';
import { QuoteComponent } from './components/quote/quote.component';
import { CommentComponent } from './components/comment/comment.component';
import { ReplyComponent } from './components/reply/reply.component';
import { RelatedComponent } from './components/related/related.component';
import { ImgComponent } from './components/img/img.component';
import { ContentComponent } from './components/content/content.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ShareComponent } from './components/share/share.component';
import { WriterComponent } from './components/writer/writer.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './components/account/account.component';
import { BreadcrumbComponent } from './components/account/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/account/card/card.component';
import { PersonainfoComponent } from './components/account/personainfo/personainfo.component';
import { LoginSecurityComponent } from './components/account/login-security/login-security.component';
import { NotificationsComponent } from './components/account/notifications/notifications.component';
import { BasicinfoComponent } from './components/account/personainfo/basicinfo/basicinfo.component';
import { DeleteComponent } from './components/account/personainfo/delete/delete.component';
import { PrivacyComponent } from './components/account/personainfo/privacy/privacy.component';
import { AddressComponent } from './components/account/personainfo/address/address.component';
import { PasswordComponent } from './components/account/login-security/password/password.component';
import { ConnectedAccountsComponent } from './components/account/login-security/connected-accounts/connected-accounts.component';
import { SocialAccountsComponent } from './components/account/login-security/social-accounts/social-accounts.component';

@NgModule({
  declarations: [
    AccountComponent,
    DeleteComponent,
    PrivacyComponent,
    AddressComponent,
    PasswordComponent,
    ConnectedAccountsComponent,
    SocialAccountsComponent,
    BreadcrumbComponent,
    CardComponent,
    PersonainfoComponent,
    LoginSecurityComponent,
    NotificationsComponent,
    BasicinfoComponent,
    AppComponent,
    HeaderComponent,
    ProfileOverviewComponent,
    ArticleOverviewComponent,
    NavigationBarComponent,
    FooterComponent,
    ProfileComponent,
    ArticleComponent,
    AuthorOverviewComponent,
    QuoteComponent,
    CommentComponent,
    ReplyComponent,
    RelatedComponent,
    ImgComponent,
    ContentComponent,
    BadgeComponent,
    ShareComponent,
    WriterComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
