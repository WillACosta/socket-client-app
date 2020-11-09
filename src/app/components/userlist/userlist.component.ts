import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"],
})
export class UserlistComponent implements OnInit {
  activeUsers$: Observable<any>;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.activeUsers$ = this.chatService.getActiveUsers();
    console.log(this.activeUsers$);
  }
}
