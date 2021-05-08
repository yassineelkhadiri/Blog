import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  user: User;
  ngOnInit(): void {
    this.user = this.usersService.getLoggedUser();
  }
}
