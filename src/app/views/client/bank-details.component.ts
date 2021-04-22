import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClientBankDetails } from '../../models/client';
import { BankDetailsService } from '../../service/bank-details.service';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
})
export class BankDetailsComponent implements OnInit {

  @ViewChild('largeModal') public largeModal: ModalDirective;



  constructor(public bankSvc: BankDetailsService) { }
  bankDetaials: ClientBankDetails = new ClientBankDetails();
  isEdit: boolean;

  ngOnInit(): void {
  }


  subscribeModalEvent() {
    this.bankSvc.modalSubject.subscribe(any => {
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
      this.bankSvc.update(this.bankDetaials).subscribe(resp => {
      });
    }
    else {
      this.bankSvc.Add(this.bankDetaials).subscribe(resp => {
      });
    }
    userForm.resetForm();
    this.close();
  }
}
