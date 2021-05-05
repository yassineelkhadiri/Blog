import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-author-overview',
  templateUrl: './author-overview.component.html',
  styleUrls: ['./author-overview.component.css']
})
export class AuthorOverviewComponent implements OnInit {
  user = new User('./assets/img/100x100/img11.jpg','Hanna Wolfe');
  date : string = 'July 15, 2018'
  constructor() { }

  ngOnInit(): void {
  }

}
