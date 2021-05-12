import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css'],
})
export class BasicformComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {}
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
      0,
      0,
      0
    );

    this.usersService.setLoggedUser(this.user);
    this.usersService.createAndStoreUser(this.user);

    this.router.navigate(['/feed']);
  }

  onFileChanged(event) {
    this.url = './assets/img/official/profile.png';
    // var reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);

    // reader.onload = (_event) => {
    //   this.url = reader.result;
    // };
  }
}
