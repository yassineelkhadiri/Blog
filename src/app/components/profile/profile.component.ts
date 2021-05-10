import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  articles: Article[] = [];
  auther: string;
  user: User;

  constructor(
    private articleService: ArticlesService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
    this.auther = this.userService.getLoggedUser().mail;
    this.articles = this.articleService.getMyArticles(this.auther);
  }
}
