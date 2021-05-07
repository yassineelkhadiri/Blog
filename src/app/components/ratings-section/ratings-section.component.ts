import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-ratings-section',
  templateUrl: './ratings-section.component.html',
  styleUrls: ['./ratings-section.component.css']
})
export class RatingsSectionComponent implements OnInit {
  ratings : { stars : number , user : User , review : string }[] = [
    { stars : 5 , user : new User("./assets/img/avatar-2.jpg","Christina Kray","Business Manager") , review : "BlogAll is just awesome! I just launched a startup which leaves me with no time get updated, so BlogAll is a life-saver. Now that I got used to it, I couldn't live without my daily news!"},
    { stars : 4 , user : new User("./assets/img/avatar-1.jpg","Massalha Shady","CEO at Slack") , review : "free, intoxic and credible data, delivered to me anytime and anywhere. We have lots of Blog sites on the internet, but no one comes even close to BlogAll. Me and my family are so in love!"},
    { stars : 5 , user : new User("./assets/img/avatar-3.jpg","Mark McManus","Journalist") , review : "I was looking for a quick and easy information service online. I tried a lot of them and ended up with BlogAll. Best blog post service i've ever seen. Keep up the great work!"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
