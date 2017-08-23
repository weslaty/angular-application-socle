import { Component, OnInit } from '@angular/core';
import { User} from '../user/user.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../../services/user.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  id: number;
  title = 'Test binding';
  attri = 'Test';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getUser(params.get('id')))
      .subscribe((user: User) => this.user = user);

    this.id = 5;
  }

  save(): void {
    this.service.update(this.user);
      // .then(() => this.goBack());
  }
}
