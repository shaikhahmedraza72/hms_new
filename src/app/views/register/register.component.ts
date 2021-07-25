import { Component, Type } from '@angular/core';
import { Registration } from '../../models/registration';
import { RegisterService } from '../../service/register.service';
import { AuthService } from '../../service/auth.service';
import { StorageService } from '../../service/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  users: Registration = {};
  submitted = false;
  registeredList: Registration[] = [];
  storage: Storage;
  typeUser: { label: string; value: string; }[];
  constructor(
    public regSvc: RegisterService, 
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router) {
      this.storage = this.storageService.get();
  }


  ngOnInit(): void {
    this.getUsers();
    this.users = {};
    this.typeUser = [{
      label: 'Admin', value: 'admin'
    },
    {
      label: 'User', value: 'user'
    }
    ];
  }
  getUsers() {
    this.regSvc.getRegisteredUser().subscribe(res => { 
      this.registeredList = res;
    })
  }


  register() {
    this.submitted = true;
    this.authService.registerUser(this.users).subscribe(
      (resp:any)=>{
        this.storage.setItem('HMSToken',resp.token);
        this.router.navigate(['/dish/dish-menu']);       
      },
      err => {
        console.log(err)
      }
    )
    // this.regSvc.AddUser(this.users).subscribe(res => {
    //   if (res) {
    //     this.registeredList.push(this.users);
    //     alert('Registration completed')
    //   }
    // })
  }
}
