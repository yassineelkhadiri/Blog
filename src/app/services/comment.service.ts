import { Injectable } from '@angular/core';
import { Comments } from '../model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments: Comments[] = [
    {
      img: './assets/img/100x100/img11.jpg',
      fname: 'Hanna',
      lname: 'Wolfe',
      date: '1 day ago',
      text: "Love it Dave! We're all about keeping it up.",
      articleId: '123',
    },
    {
      img: './assets/img/100x100/img3.jpg',
      fname: 'Dave',
      lname: 'Austin',
      date: '1 day ago',
      text:
        'As a Special Education teacher this resonates so well with me. Fighting with gen ed teachers to flatten for the students with learning disabilities. It also confirms some things for me in my writing.',
      articleId: '123',
    },
    {
      img: './assets/img/100x100/img1.jpg',
      fname: 'Christina',
      lname: 'Kray',
      date: '2 days ago',
      text:
        'Since our attention spans seem to be shrinking by theday — keeping it simple is more important than ever.',
      articleId: '321',
    },
  ];

  constructor() {}
  getComments() {
    return this.comments;
  }

  addComment() {}
}
