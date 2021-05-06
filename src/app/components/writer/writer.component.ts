import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  user = new User('./assets/img/100x100/img11.jpg','Hanna Wolfe','',0,0,0,'I create advanced website builders made exclusively for web developers.');
  constructor() { }

  ngOnInit(): void {
  }

}
