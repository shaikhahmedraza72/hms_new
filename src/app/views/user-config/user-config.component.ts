import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {
  user: User = new User();
  submitted: boolean;
  userList: User[] = [];
  userDialog: boolean;
  selectedUsers: User[];
  constructor(public userSvc: UserService, private msgService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }
  // saveUser(d){
  //   console.log('USERDATA', d)
  //   if(!d.id){
  //     this.userSvc.AddUser(d).subscribe(resp => {

  //     });
  //   } else { 
  //     this.userSvc.updateUser(d).subscribe(resp => {

  //     });
  //   }
    
  // }

  loadData() {
    this.userSvc.getUserList().subscribe(res => {
      this.userList = res;
    });
  }
  openNew() {
    // this.dish = '';
    this.submitted = false;
    this.userDialog = true;
    // this.dishSvc.openModal();
}
  saveUser(value) {
    this.submitted = true;
    console.log(this.user);
    // console.log(this.dish.imageUrl);
    if (this.user.userName.trim()) {
        if (this.user.id) {
            this.userList[this.findIndexById(this.user.id)] = this.user;
            this.msgService.add({severity:'success', summary: 'Successful', detail: 'user Updated', life: 3000});
        } else {
            this.user.id = this.userList[this.userList.length].id + 1;
            // this.user.imageUrl = 'product-placeholder.svg';
            this.userList.push(this.user);
            this.msgService.add({severity:'success', summary: 'Successful', detail: 'user Created', life: 3000});
        }
  
        this.userList = [...this.userList];
        // this.dishDialog = false;
    }
    // if (this.isEdit) {
    //   this.dishSvc.update(this.dish).subscribe(resp => {
    //   });
    // }
    // else {
    //   this.dishSvc.Add(this.dish).subscribe(resp => {
    //   });
    // }
    // this.hideDialog();
  }

  editUser(user: User) {
    this.user = {...user};
    this.userDialog = true;
  }
  
  deleteUser(user: User) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + user.userName + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.userList = this.userList.filter(val => val.userName !== user.userName);
            // this.dish;
            this.msgService.add({severity:'success', summary: 'Successful', detail: 'Dish Deleted', life: 3000});
        }
    });
  }

  deleteDish(user: User) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + user.userName + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.userList = this.userList.filter(val => val.userName !== user.userName);
            // this.dish;
            this.msgService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
        }
    });
  }
  deleteSelectedDishes() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected dishes?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.userList = this.userList.filter(val => !this.selectedUsers.includes(val));
            this.selectedUsers = null;
            this.msgService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
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

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

}
