import { Component, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() article : Article = null;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
