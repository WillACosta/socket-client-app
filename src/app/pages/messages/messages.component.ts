import { Component, OnInit } from "@angular/core";
import { WebsocketsService } from "src/app/services/websockets.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  constructor(public wsService: WebsocketsService) {}

  ngOnInit(): void {}
}
