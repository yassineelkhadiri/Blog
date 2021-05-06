import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works-section',
  templateUrl: './how-it-works-section.component.html',
  styleUrls: ['./how-it-works-section.component.css']
})
export class HowItWorksSectionComponent implements OnInit {
   steps : { name : string , action : string }[] = [
    { name : "Becoming" , action : "Create your own account." },
    { name : "Chosing" , action : "Chose the categories that you see fit!" },
    { name : "Enjoying" , action : "Experience the information like never before!" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
