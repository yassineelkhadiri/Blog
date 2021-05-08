import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css'],
})
export class ProfileOverviewComponent implements OnInit {
  user: User;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.getLoggedUser();
  }
}
