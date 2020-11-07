import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { WebsocketsService } from "../services/websockets.service";

@Injectable({
  providedIn: "root",
})
export class UserGuard implements CanActivate {
  constructor(private wsService: WebsocketsService, private router: Router) {}

  canActivate() {
    if (this.wsService.getUser()) return true;
    else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
