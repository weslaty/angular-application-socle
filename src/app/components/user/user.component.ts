import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UserService } from '../../services/user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

const routes: Routes = [
  { path: 'edit', component: UserEditComponent },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe((users) => {
      /*console.log(users);*/
      this.users = users;
    });
  }

}
export interface User {
  id: number;
  password: string;
  login: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  mobilePhone: string;
  status: number;
  createDate: string;
  lastUpdateDate: string;
  lastConnection: string;

}
