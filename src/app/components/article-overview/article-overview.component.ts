import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css'],
})
export class ArticleOverviewComponent implements OnInit {
  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {}

  @Input() articles: Article[];

  showArticle(article: Article) {
    this.articleService.setSelectedarticle(article);
  }
}
