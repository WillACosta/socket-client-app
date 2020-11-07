import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WebsocketsService } from "src/app/services/websockets.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userName: string;

  constructor(public wsService: WebsocketsService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.wsService
      .loginWS(this.userName)
      .then((response) => {
        this.router.navigate(["/messages"], response);
      })
      .catch((error) => {});
  }
}
