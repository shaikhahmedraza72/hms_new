import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { EndUser } from '../../../models/client';
import { ClientService } from '../../../service/client.service';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html'
})
export class EndUserComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;

  endUser: EndUser = new EndUser();
  isEdit: boolean;

  constructor(private endUserSvc: ClientService) { }

  ngOnInit(): void {
  }

  subscribeModalEvent() {
    this.endUserSvc.modalSubjectForEndUser.subscribe(any => {
      this.largeModal.show();
      this.isEdit = false;
    });
    this.endUserSvc.editModalSubjectForEndUser.subscribe(client => {
      this.endUser = Object.assign({}, this.endUser);
      this.isEdit = true;
    });
  }

  close() {
    this.largeModal.hide();
  }

  onSubmit(endUserForm: NgForm) {
    if (this.isEdit) {
      this.endUserSvc.updateEndUser(this.endUser).subscribe(resp => {
      });
    }
    else {
      this.endUserSvc.AddEndUser(this.endUser).subscribe(resp => {
      });
    }
    endUserForm.resetForm();
    this.close();
  }
}
