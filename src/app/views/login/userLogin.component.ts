import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/userLogin';
import { AuthService } from '../../service/auth.service';
import { StorageService } from '../../service/storage.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: 'userLogin.component.html',
  styleUrls:['./userLogin.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  userList: UserLogin[] = [];
  storage: Storage;
  users:UserLogin;
  constructor(
    public userSvc: UserService, 
    private authService: AuthService, 
    private storageService:StorageService,
    private router: Router) {
    this.storage = this.storageService.get();
  }
  ngOnInit(): void {
    this.users = {};
    this.userList = [{username: '' , password: '', contact: 1234567890}];
  }
  loginUser(){  
    this.authService.loginUser(this.users).subscribe(
      (resp:any)=>{
        this.storage.setItem('HMSToken', resp.token);
        this.storage.setItem('userData',resp.userType);
        this.authService.uLoggedInSubject$.next(true)
        this.router.navigate(['/dish/dish-menu'])
      },
      err=> {
        alert(err.error.message)
      }
    )
  }

 }
