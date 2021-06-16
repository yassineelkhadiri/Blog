import { Injectable } from '@angular/core';
import { Comments } from '../model/comment.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  //some error with datat base that's why i hardcoded some examples
  comments: Comments[] = [
    {
      img: './assets/img/profile/nour.jpg',
      fname: 'Nour',
      lname: 'Araar',
      date: '1 day ago',
      text: "Love it Dave! We're all about keeping it up.",
      articleId: '123',
    },
    {
      img: './assets/img/profile/nizar.jpg',
      fname: 'Nizar Zouaoui',
      lname: 'Austin',
      date: '1 day ago',
      text: 'As a Special Education teacher this resonates so well with me. Fighting with gen ed teachers to flatten for the students with learning disabilities. It also confirms some things for me in my writing.',
      articleId: '123',
    },
    {
      img: './assets/img/profile/yassine.jpg',
      fname: 'Yassine Elkhadiri',
      lname: 'Kray',
      date: '2 days ago',
      text: 'Since our attention spans seem to be shrinking by theday — keeping it simple is more important than ever.',
      articleId: '321',
    },
  ];

  createAndStoreComment(comment: Comments) {
    this.http
      .post<{ name: string }>(
        'https://blog-92a12-default-rtdb.europe-west1.firebasedatabase.app/comments.json',
        comment
      )
      .subscribe();
  }

  fetchComments() {
    this.http
      .get<{ [key: string]: Comments }>(
        'https://blog-92a12-default-rtdb.europe-west1.firebasedatabase.app/comments.json'
      )
      .pipe(
        map((responseData) => {
          const commentsArray: Comments[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              commentsArray.push(responseData[key]);
            }
          }

          return commentsArray;
        })
      )
      .subscribe((comments) => {
        this.setUsers(comments);
      });
  }

  setUsers(comments: Comments[]) {
    this.comments = comments;
  }
  constructor(private http: HttpClient) {}
  getComments(id: string) {
    let TempComments = this.comments.filter(
      (comment) => comment.articleId == id
    );
    console.log(TempComments);

    return TempComments;
  }

  addComment(comment: Comments) {
    this.comments.push(comment);
  }
}
