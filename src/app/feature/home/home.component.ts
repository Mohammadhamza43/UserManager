import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import IUser from "../../core/models/IUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: IUser[] = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRecords()
  }

  viewDetail(user: IUser) {
    console.log('called')
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigate(['/app/user/detail/', user?.name?.first]).then(r => {})
  }

  getRecords(count?: number) {
    this.userService.getUserRecords(count).subscribe((res) => {
      this.userList = res.results;
    })
  }
}
