import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  articles : Article[] = [];
  constructor() { 
    let article1 = new Article("./assets/img/900x450/img1.jpg","Business","Should Product Owners think like entrepreneurs?","Front is a financial technology company. We build products. We do it fast and we do it well.");
    let article2 = new Article("./assets/img/900x450/img2.jpg","Business,Strategy","How Google Assistant now helps you record stories forkids","Google is constantly updating its consumer AI, Google Assistant, with new features.");
    let article3 = new Article("./assets/img/900x450/img6.jpg","Creative","This Watch gym partnerships give you perks for working out");
    let article4 = new Article("./assets/img/900x450/img9.jpg","Business","Announcing Front Strategies: Ready-to-use rules");
    let article5 = new Article("./assets/img/900x450/img13.jpg","Creative,Stories","Drone Company PrecisionHawk Names New CEO");
    let article6 = new Article("./assets/img/900x450/img7.jpg","Business","Front Interview with a Lead Designer of the Hubble");
    let article7 = new Article("./assets/img/900x450/img11.jpg","Health,Environment","Better is when everything works together");
    let article8 = new Article("./assets/img/900x450/img15.jpg","Stories","Should You Buy An Apple Pencil?");
    this.articles.push(article1,article2,article3,article4,article5,article6,article8,article7);
  }

  ngOnInit(): void {}
}

