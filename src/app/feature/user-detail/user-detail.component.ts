import { Component, OnInit } from '@angular/core';
import IUser from "../../core/models/IUser";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser = {} as IUser
  constructor() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : {}
  }

  ngOnInit(): void {
  }

}
