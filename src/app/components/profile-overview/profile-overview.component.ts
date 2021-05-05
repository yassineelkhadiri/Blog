import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {
  desc1 : string = "Nataly is a freelance journalist who's been published by Popular Science, The Washington Post, USA Today, Slate, and many more.Read more at"
  user1 = new User('./assets/img/avatar-2.jpg','Hanna Wolfe',906,19.5,109,this.desc1,'hannawolfe.com')
  
  constructor() { }

  ngOnInit(): void {
  }

}
