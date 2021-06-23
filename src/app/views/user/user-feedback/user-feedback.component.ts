import { Component, OnInit } from '@angular/core';
import { User, UserFeedback } from './../../../models/user';
import { UserService } from './../../../service/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent implements OnInit {
  userFeedback: UserFeedback;
  feedback: UserFeedback;
  feedbackList: UserFeedback[] = [];

  // ratings: number = 2;

  val3: number = 2;
  constructor(public userSvc: UserService, public msgService: MessageService) { }

  ngOnInit(): void {
    this.getFeedback();
    this.userFeedback = {}
    this.userFeedback.termsAccept = false;
    this.userFeedback.ratings = 0;
    this.userFeedback.opinionText = "";
    this.userFeedback.reviewTitle = "";
    console.log(this.userFeedback);
  }

  getFeedback(){
    this.userSvc.getFeedbacklist().subscribe(res => {
      this.feedbackList = res;
    });
  }

  submitFeedback(){
    debugger;
    // this.userFeedback.id = this.feedbackList[this.feedbackList.length - 1].id + 1;
    this.userSvc.postReview(this.userFeedback).subscribe(res => {
      if(res){
        this.feedbackList.push(this.userFeedback);
        this.msgService.add({ severity: 'success', summary: 'Successful', detail: 'Feedback Posted', life: 3000 });
      }
    })
    console.log(this.feedback);
  }
}
