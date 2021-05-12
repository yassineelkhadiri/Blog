import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { UsersService } from 'src/app/services/users.service';
import { nanoid } from 'nanoid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
})
export class NewpostComponent implements OnInit {
  title: string;
  resume: string;
  content: string;
  pathToImg: string;

  constructor(
    private articleService: ArticlesService,
    private userService: UsersService,
    private router: Router
  ) {}
  user: User;
  article: Article;
  imgUrl: string = '';
  articles: Article[];
  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
  }

  onFileChanged(event) {
    this.imgUrl = './assets/img/900x450/img1.jpg';
  }

  onSave(form: NgForm) {
    const f = form.value;
    this.article = new Article(
      f.categorie,
      f.title,
      f.resume,
      this.imgUrl,
      this.user.mail,
      this.user.photo,
      f.content,
      nanoid()
    );

    this.articleService.addArticle(this.article);
    this.router.navigate(['feed']);
    form.reset();
  }
}
