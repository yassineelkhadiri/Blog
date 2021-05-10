import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comments } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comments[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
  }

  @Input() Id: string;

  onComment(form: NgForm) {
    console.log(form.value);
  }
}
