import { Component, Type } from '@angular/core';
import { Registration } from '../../models/registration';
import { RegisterService } from '../../service/register.service';
import { AuthService } from '../../service/auth.service';
import { StorageService } from '../../service/storage.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { style } from '@angular/animations';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  users: Registration;
  submitted = false;
  registeredList: Registration[] = [];
  storage: Storage;
  typeUser: { label: string; value: number; }[];
  userTypeVal: number;
  constructor(
    public regSvc: RegisterService,
    public userSvc: UserService,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router) {
    this.storage = this.storageService.get();
  }


  ngOnInit(): void {
    // this.getUsers();
    this.users = {};
    this.typeUser = [{
      label: 'Admin', value: 2
    },
    {
      label: 'User', value: 3
    }
    ];
  }
  // getUsers() {
  //   this.regSvc.getRegisteredUser().subscribe(res => {
  //     this.registeredList = res;
  //   })
  // }


  register(data: NgForm) { 
    this.submitted = true;
    console.log(data);
    if (this.users.userType === 3) {
      this.userSvc.AddUser(this.users).subscribe(() => {
        this.registeredList.push(this.users);
        alert('Registration completed')
      })
    } else {
      this.regSvc.AddUser(this.users).subscribe(res => {
        if (res) {
          this.registeredList.push(this.users);
          alert('Registration completed')
        }
        this.users = {}
      })
    }
  }
}
