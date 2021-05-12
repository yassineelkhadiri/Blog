import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { User } from 'src/app/model/user.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article = null;
  user: User;

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.article = this.articleService.getSelectedArticle();
  }
}
