import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private stateUser = false;
  private statePass = false;

  constructor() {}

  ngOnInit(): void {}

  get getStateUser() {
    return this.stateUser;
  }
  get getStatePass() {
    return this.statePass;
  }
  changeStatusUser = () => (this.stateUser = true);
  changeStatusPass = () => (this.statePass = true);
  clean = () => {
    this.statePass = false;
    this.stateUser = false;
  };
}
