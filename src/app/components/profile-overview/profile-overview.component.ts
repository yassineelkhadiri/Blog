import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css'],
})
export class ProfileOverviewComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
  showpost = false;
  show() {
    this.showpost = !this.showpost;
  }
}
