import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getUsers().subscribe((users) => {
      /*console.log(users);*/
      this.users = users;
    });
  }

}
interface User{
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
