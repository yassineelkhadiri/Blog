import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article = null;

  constructor(
    private articleService: ArticlesService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.article = this.articleService.getSelectedArticle();
  }
}
