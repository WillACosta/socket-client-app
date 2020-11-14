import { Component, OnInit } from "@angular/core";
import { WebsocketsService } from "src/app/services/websockets.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  fontAwesomeIcons: string[] = [
    "fas fa-cat",
    "fas fa-paw",
    "fas fa-dog",
    "fas fa-dragon",
    "fas fa-crow",
  ];

  currentIcon: string;

  constructor(public wsService: WebsocketsService) {}

  ngOnInit(): void {
    /** ícone aleatório */
    this.currentIcon = this.fontAwesomeIcons[
      Math.floor(Math.random() * this.fontAwesomeIcons.length)
    ];
  }

  logout() {
    this.wsService.logoutWS();
  }
}
