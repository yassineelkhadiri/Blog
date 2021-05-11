import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  canDelete : boolean = false
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  toggleCanDelete() {
    this.canDelete = !this.canDelete;
  }

  deleteUser() {
    this.userService.removeUser();
  }
}
