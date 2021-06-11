import { Component, OnInit } from '@angular/core';
import { User, UserFeedback } from '../../models/user';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent implements OnInit {
  userFeedback: UserFeedback;
  checked: boolean;
  // ratings: number = 2;

  val3: number = 2;
  constructor() { }

  ngOnInit(): void {
    this.userFeedback = {}
    this.userFeedback.ratings = 0;
    this.userFeedback.opinionText = "";
    this.userFeedback.reviewTitle = "";
    console.log(this.userFeedback);
  }

  submitFeedback(){
    // do something
  }
}
