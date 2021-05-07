import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment'
import { Reply } from 'src/app/model/reply';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments : Comment[] = [];
  
  
  constructor() {
    const firstReply    = new Reply('./assets/img/100x100/img11.jpg','Hanna Wolfe',"1 day ago","Love it Dave! We're all about keeping it up.");
    const firstComment  = new Comment('./assets/img/100x100/img3.jpg','Dave Austin','1 day ago',"As a Special Education teacher this resonates so well with me. Fighting with gen ed teachers to flatten for the students with learning disabilities. It also confirms some things for me in my writing.",firstReply);
    const secondComment = new Comment('./assets/img/100x100/img1.jpg','Christina Kray','2 days ago','Since our attention spans seem to be shrinking by theday — keeping it simple is more important than ever.',null);
  
    this.comments.push(firstComment , secondComment);
    console.log(this.comments);
   }

  ngOnInit(): void {
    
  }

  //addComment(comment : Comment) {
  //  this.comments.push(comment);
  //}

  

}
