import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {
  relatedArticles : Article[] = []
  constructor() { 
    const firstRelated = new Article('./assets/img/500x280/img1.jpg','Product','Better is when everything works together');
    const secondRelated = new Article("./assets/img/500x280/img3.jpg",'Tech','Should You Buy An Apple Pencil?');
    const thirdRelated = new Article("./assets/img/500x280/img5.jpg",'Product','This Watch gym partnerships give you perks for working out');
    const fourthRelated = new Article("./assets/img/500x280/img7.jpg",'Tech','Drone Company PrecisionHawk Names New CEO');
    this.relatedArticles.push(firstRelated,secondRelated,thirdRelated,fourthRelated);
  }

  ngOnInit(): void {
  }

}
