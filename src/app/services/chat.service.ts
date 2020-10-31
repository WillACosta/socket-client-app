import { WebsocketsService } from 'src/app/services/websockets.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketsService) {}

  // Envia as mensagems
  sendMessage(message: string) {
    const payload = {
      message,
    };

    this.wsService.emit('message', JSON.stringify(payload));
  }

  // Recupera as mensagems do servidor e retorna um observable
  getMessage() {
    return this.wsService.listen('stream');
  }
}
