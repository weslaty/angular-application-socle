import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(public http: Http) {
    console.log('UserService connected ....');
  }

  getUsers() {
    return this.http.get('http://localhost:9090/user/list')
      .map(res => res.json());
  }

}
