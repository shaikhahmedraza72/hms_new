import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/userLogin';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'userLogin.component.html',
  styleUrls:['./userLogin.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  userList: UserLogin[] = [];
  constructor(public userSvc: UserService) {}
  ngOnInit(): void {
    this.userList = [{userName: '' , password: '', contact: 1234567890}];
  }
 }
