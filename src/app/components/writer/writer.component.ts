import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css'],
})
export class WriterComponent implements OnInit {
  @Input() author: string;
  user: User;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.fetchUsers();

    this.user = this.userService.getTheUser(this.author);
  }
}
