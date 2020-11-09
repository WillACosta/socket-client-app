import { Component, OnInit } from "@angular/core";
import { ChatService } from "./services/chat.service";

import { WebsocketsService } from "./services/websockets.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private wsService: WebsocketsService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.chatService.getPrivateMessage().subscribe((message) => {
      console.log(message);
    });
  }
}
