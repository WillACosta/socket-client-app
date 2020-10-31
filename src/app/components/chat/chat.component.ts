import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  mensagem: string;
  chatSubscription: Subscription;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatSubscription = this.chatService
      .getMessage()
      .subscribe((message: any) => {
        console.log(message);
      });
  }

  ngOnDestroy(): void {
    this.chatSubscription?.unsubscribe();
  }

  send() {
    console.log(this.mensagem);
    this.chatService.sendMessage(JSON.stringify(this.mensagem));
  }
}
