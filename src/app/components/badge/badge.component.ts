import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  badges : string[] = ['Ecommerce','Website','Bootstrap','Startup','Free'];
  constructor() { }

  ngOnInit(): void {
  }

}
