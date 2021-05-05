import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private userService: UserService) {}

  user: User = new User();
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
