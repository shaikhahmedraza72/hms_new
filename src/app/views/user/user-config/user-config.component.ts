import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from './../../../service/user.service';
import { CommonService } from './../../../service/common.service'

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {
  user: User;
  submitted: boolean;
  userList: User[] = [];
  userDialog: boolean;
  selectedUsers: User[];
  cities: any;
  states: any;
  constructor(public userSvc: UserService,public commonSvc: CommonService, private msgService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loadData();
    this.getCities();
    this.getStates();
  }

  loadData() {
    this.userSvc.getUserList().subscribe(res => {
      this.userList = res;
    });
  }
  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }
  reset() {
    this.user = {}
    // this.userDialog = false;
    this.submitted = false;
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }
  saveUser() {
    this.submitted = true;
    console.log(this.user);
    if (this.user.userName.trim()) {
      if (this.user.id) {
        this.userSvc.updateUser(this.user).subscribe(() => {
            this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'user Updated', life: 3000 });
            this.loadData();
            this.getCities();
            this.getStates();
        })

      } else {
        if(this.user.id){
          this.user.id = this.userList[this.userList.length - 1].id + 1;
        } else {
          this.user.id = 1;
        }
        this.userSvc.AddUser(this.user).subscribe(() => {
            this.userList.push(this.user);
            this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'user Created', life: 3000 });
            this.loadData();
            this.getCities();
            this.getStates();
        })
      }
      this.userList = [...this.userList];
      this.userDialog = false;
    }
  }


  getCities() {
    this.commonSvc.getCities().subscribe(x => {
      this.cities = x.map(cItem => {
        return { label: cItem.name, value: cItem.id }
      })
      console.log(this.cities)
    });

  }

  getStates() {
    this.commonSvc.getStates().subscribe(x => {
      this.states = x.map(cItem => {
        return { label: cItem.name, value: cItem.id }
      })
      console.log(this.cities)
    });
  }




  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.userName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userSvc.deleteUserData(user.id).subscribe(() => {
            this.userList = this.userList.filter(val => val.userName !== user.userName);
            this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        });
      }
    });
  }
  deleteSelectedUser() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userList = this.userList.filter(val => !this.selectedUsers.includes(val));
        this.selectedUsers.map((userId: User) => {
          this.userSvc.deleteUserData(userId.id).subscribe(() => {
            this.selectedUsers = null;
            this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 })
        })
        })
      }
    });
  }

  findIndexById(id: number) {
    let index = -1;
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id == id) {
        index = i;
        break;
      }
    }

    return index;
  }



  createId(): string {
    let id = '';
    var chars = '0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
