import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClientBankDetails } from '../../models/client';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
})
export class BankDetailsComponent implements OnInit {

  @ViewChild('largeModal') public largeModal: ModalDirective;



  constructor(public bankSvc: ClientService) { }
  bankDetaials: ClientBankDetails = new ClientBankDetails();
  isEdit: boolean;

  ngOnInit(): void {
  }


  subscribeModalEvent() {
    this.bankSvc.modalSubjectForClient.subscribe(any => {
      this.largeModal.show();
      this.isEdit = false;
    });
    this.bankSvc.editModalSubject.subscribe(client => {
      this.bankDetaials =Object.assign({}, this.bankDetaials) ;
      this.isEdit = true;
    });
  }

  close() {
    this.largeModal.hide();
  }
  onSubmit(userForm: NgForm) {
    if (this.isEdit) {
      this.bankSvc.updateBankDetails(this.bankDetaials).subscribe(resp => {
      });
    }
    else {
      this.bankSvc.AddBankDetails(this.bankDetaials).subscribe(resp => {
      });
    }
    userForm.resetForm();
    this.close();
  }
}
