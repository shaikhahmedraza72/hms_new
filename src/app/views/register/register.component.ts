import { Component, Type } from '@angular/core';
import { Registration } from '../../models/registration';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  users: Registration = {};
  submitted = false;
  registeredList: Registration[] = [];
  typeUser: { label: string; value: string; }[];
  constructor(public regSvc: RegisterService) {

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
      debugger;
      this.registeredList = res;
    })
  }


  register() {
    this.submitted = true;
    this.regSvc.AddUser(this.users).subscribe(res => {
      if (res) {
        this.registeredList.push(this.users);
        alert('Registration completed')
      }
    })
  }
}
