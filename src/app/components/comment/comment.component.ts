import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { Comments } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/services/comment.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comments[] = [];

  constructor(
    private commentService: CommentService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.comments = this.commentService.getComments(this.Id);
    this.user = this.userService.getLoggedUser();
  }

  user: User;
  comment: Comments;
  @Input() Id: string;

  onComment(form: NgForm) {
    const date = new Date();
    this.comment = new Comments(
      this.user.photo,
      this.user.fname,
      this.user.lname,
      date.toDateString()+date.toLocaleTimeString(),
      form.value.text,
      this.Id
    );
    this.commentService.addComment(this.comment);
    this.comments = this.commentService.getComments(this.Id);

    form.reset();
  }
}
