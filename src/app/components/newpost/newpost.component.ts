import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/auth/user.model';
import { Article } from 'src/app/model/article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
})
export class NewpostComponent implements OnInit {
   title : string;
   resume : string;
   content : string;
   pathToImg : string;

  constructor(
    private articleService : ArticlesService,
    private userService : UsersService,
  ) {}

  ngOnInit(): void {}

  onFileChanged(event) {}
  onSave(form: NgForm) {
    let newArticle = new Article(
    "",
    this.title,
    this.resume,
    this.pathToImg,
    this.userService.getLoggedUser().fname,
    this.userService.getLoggedUser().photo,
    this.content,
    "123");
    this.articleService.addArticle(newArticle);
  }
}
