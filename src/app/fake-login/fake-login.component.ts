import { Component, OnInit } from '@angular/core';
import { AccountService } from "../services/account.service";

@Component({
  selector: 'app-fake-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.scss']
})
export class FakeLoginComponent implements OnInit {

  constructor(private cuenta: AccountService){}

  ngOnInit(): void {
    this.cuenta.intentoFakeLogin();
  }
}
