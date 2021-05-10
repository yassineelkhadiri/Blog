import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { ArticleOverviewComponent } from './components/article-overview/article-overview.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
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
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FeedComponent } from './components/feed/feed.component';
import { BasicformComponent } from './components/basicform/basicform.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HowItWorksSectionComponent } from './components/how-it-works-section/how-it-works-section.component';
import { RatingsSectionComponent } from './components/ratings-section/ratings-section.component';
import { SwiperModule } from 'swiper/angular';
import { NewpostComponent } from './components/newpost/newpost.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
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
    HomeComponent,
    AuthComponent,
    FeedComponent,
    BasicformComponent,
    BlogCardComponent,
    HeroSectionComponent,
    HowItWorksSectionComponent,
    RatingsSectionComponent,
    NewpostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
