import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  name : string =' Adrian Teh';
  text : string ='I love Front! I love the ease of use, I love the fact that I have total creative freedom...'

  constructor() { }

  ngOnInit(): void {
  }

}
