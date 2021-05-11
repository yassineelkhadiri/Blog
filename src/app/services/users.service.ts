import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users: User[] = [];
  loggedUser: User;

  createAndStoreUser(user: User) {
    this.http
      .post<{ name: string }>(
        'https://blog-92a12-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        user
      )
      .subscribe();
  }

  fetchUsers() {
    this.http
      .get<{ [key: string]: User }>(
        'https://blog-92a12-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((responseData) => {
          const usersArray: User[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              usersArray.push(responseData[key]);
            }
          }

          return usersArray;
        })
      )
      .subscribe((users) => {
        this.setUsers(users);
      });
  }

  setMail(email: string) {
    this.loggedUser = new User('', '', '', email, 0, '', '', 0, 0, 0);
  }

  findLogger(mail: string) {
    const i = this.users.indexOf(this.users.find((user) => user.mail == mail));

    this.loggedUser = this.users[i];
  }

  getTheUser(mail: string) {
    return this.users.find((user) => user.mail == mail);
  }

  getLoggedUser() {
    return this.loggedUser;
  }
  setLoggedUser(user: User) {
    this.loggedUser = user;
  }

  removeUser() {
    const i = this.users.indexOf(this.loggedUser);
    this.users.splice(i, 1);
  }

  updateUser(u: User) {
    const i = this.users.indexOf(
      this.users.find((user) => user.mail == u.mail)
    );
    this.users[i] = u;
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}
