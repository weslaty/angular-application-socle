import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Location } from '@angular/common';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {User} from '../components/user/user.component';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    public http: Http,
    private location: Location
) {
    console.log('UserService connected ....');
  }

  getUsers() {
    return this.http.get('http://localhost:9090/user/list')
      .map(res => res.json());
  }

  getUser(userId: string) {
    return this.http.get(('http://localhost:9090/user/' + userId))
      .map(res => res.json());
  }

  update(user: User): Promise<User> {
    const url = 'http://localhost:9090/user/edit';
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => this.goBack())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  goBack(): void {
    this.location.back();
  }
}
