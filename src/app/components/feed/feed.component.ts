import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticlesService) {}
  ngOnInit(): void {
    this.articles = this.articleService.getArticals();
  }
}
