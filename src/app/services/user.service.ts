import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  user: User = new User();

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}
