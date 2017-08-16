import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('DataService connected ....');
  }

  getUsers() {
    return this.http.get('http://localhost:9090/user/list')
      .map(res => res.json());
  }

}
