import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { WebsocketsService } from "src/app/services/websockets.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userName: string;
  isloading: boolean = false;

  constructor(
    public wsService: WebsocketsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.isloading = true;
    this.wsService
      .loginWS(this.userName)
      .then((response) => {
        this.isloading = false;
        this.router.navigate(["/messages"], response);
      })
      .catch((error) => {
        this.isloading = false;
        this.toastr.warning("Ops! Aconteceu um erro ao fazer o seu login");
      });
  }
}
