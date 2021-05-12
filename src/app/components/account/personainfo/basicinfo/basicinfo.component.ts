import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css'],
})
export class BasicinfoComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.user = this.usersService.getLoggedUser();
  }

  user: User;
  url: string = './assets/img/official/profile.png';

  onSave(form: NgForm) {
    const f = form.value;
    this.user = new User(
      f.fName,
      f.lName,
      f.gender,
      f.email,
      f.phone,
      f.bio,
      this.url,
      this.user.posts,
      this.user.followers,
      this.user.following
    );

    this.usersService.updateUser(this.user);
  }

  onFileChanged(event) {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);

    //   reader.onload = (_event) => {
    //     this.url = reader.result;
    //   };
    this.url = './assets/img/official/profile.png';
  }
}
