import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users: User[] = [
    {
      fname: 'sabri',
      lname: 'gharbi',
      gender: 'male',
      mail: 'sabri@email.com',
      phone: 12345678,
      bio: 'hello !',
      photo: './assets/img/official/profile.png',
      posts: 196,
      followers: 996,
      following: 524,
    },
  ];

  loggedUser: User;

  setMail(email: string) {
    this.loggedUser = new User('', '', '', email, 0, '', '', 0, 0, 0);
  }

  logger() {
    console.log(this.loggedUser);
  }

  findLogger(mail: string) {
    const i = this.users.indexOf(this.users.find((user) => user.mail == mail));

    this.loggedUser = this.users[i];
  }

  getLoggedUser() {
    return this.loggedUser;
  }
  setLoggedUser(user: User) {
    this.loggedUser = user;
  }

  removeUser(u: User) {
    const i = this.users.indexOf(u);
    this.users.splice(i, 1);
  }
  addUser(user: User) {
    this.users.push(user);
  }
  updateUser(u: User) {
    const i = this.users.indexOf(
      this.users.find((user) => user.mail == u.mail)
    );
    this.users[i] = u;
  }
}
