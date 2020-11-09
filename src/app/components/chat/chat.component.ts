import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit, OnDestroy {
  mensagem: string;
  chatSubscription: Subscription;

  messages: any[] = [];

  chatGroupEl: HTMLElement;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatGroupEl = document.getElementById("chat-messages");

    this.chatSubscription = this.chatService
      .getMessage()
      .subscribe((msg: any) => {
        let receivedMessage;
        typeof msg === "string"
          ? (receivedMessage = JSON.parse(msg))
          : (receivedMessage = msg);

        this.messages.push(receivedMessage);

        /** Rolar scroll para novas mensagens */
        setTimeout(() => {
          this.chatGroupEl.scrollTop = this.chatGroupEl.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy(): void {
    this.chatSubscription?.unsubscribe();
  }

  send() {
    if (this.mensagem.trim().length === 0) return;

    this.chatService.sendMessage(this.mensagem);
    this.mensagem = "";
  }
}
