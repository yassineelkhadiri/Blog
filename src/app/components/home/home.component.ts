import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private articleService: ArticlesService,
    private commentsService: CommentService
  ) {}
  ngOnInit(): void {
    //this.commentsService.fetchComments();
    //this.articleService.fetcharticles();
    //=> this not working even if i uncomment i think it's back end related
  }
}
