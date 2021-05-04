import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.css']
})
export class ArticleOverviewComponent implements OnInit {
  article1 = new Article('./assets/img/900x450/img1.jpg','Business','Should Product Owners think like entrepreneurs?','Front is a financial technology company. We build products. Wedo it fast and we do it well.','Hanna Wolfe','./assets/img/avatar-2.jpg','July 15');
  article2 = new Article('./assets/img/900x450/img13.jpg','Business','Front accounts - lets work together',"Are you an accountant? Are you a company formation advisor? Would you like to partner with one of the world's most popular and fastest-growing Fintech startups?","John O'nolan",'./assets/img/100x100/img4.jpg','July 15');
  article3 = new Article('./assets/img/900x450/img2.jpg','Community','How Google Assistant now helps you record stories for kids',' Google is constantly updating its consumer AI, Google Assistant, with new features.','Emily Milda','./assets/img/100x100/img2.jpg','July 15');
  article4 = new Article('./assets/img/900x450/img7.jpg','Community','Do millennials care about saving?',"Over the last few years, numerous studies have appeared to confirm a troubling pattern – millennials don't save, they don't care about their financial futures.",'Hanna Wolfe','./assets/img/avatar-2.jpg','July 15');
  
  articles : Article[] = [this.article1,this.article2,this.article3,this.article4]
  constructor() { }

  ngOnInit(): void {
  }

}
