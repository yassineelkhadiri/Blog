import { Component, OnInit } from '@angular/core';

class User {
  constructor(
    public img: string = ' ',
    public name: string = ' ',
    public job: string = '',
    public posts: number = 0,
    public followers: number = 0,
    public following: number = 0,
    public description: string = '',
    public email: string = ''
  ) {}
}

@Component({
  selector: 'app-ratings-section',
  templateUrl: './ratings-section.component.html',
  styleUrls: ['./ratings-section.component.css'],
})
export class RatingsSectionComponent implements OnInit {
  ratings: { stars: number; user: User; review: string }[] = [
    {
      stars: 5,
      user: new User(
        './assets/img/profile/yassine.jpg',
        'Yassine Elkhadiri',
        'Business Manager'
      ),
      review:
        "BlogAll is just awesome! I just launched a startup which leaves me with no time get updated, so BlogAll is a life-saver. Now that I got used to it, I couldn't live without my daily news!",
    },
    {
      stars: 4,
      user: new User(
        '../assets/img/profile/nour.jpg',
        'Nour Araar',
        'CEO at Slack'
      ),
      review:
        'free, intoxic and credible data, delivered to me anytime and anywhere. We have lots of Blog sites on the internet, but no one comes even close to BlogAll. Me and my family are so in love!',
    },
    {
      stars: 5,
      user: new User(
        '../assets/img/profile/nizar.jpg',
        'Nizar Zouaoui',
        'Journalist'
      ),
      review:
        "I was looking for a quick and easy information service online. I tried a lot of them and ended up with BlogAll. Best blog post service i've ever seen. Keep up the great work!",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
