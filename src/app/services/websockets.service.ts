import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketsService {
  public serverStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Sevidor Conectado');
      this.serverStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Sevidor Desconectado');
      this.serverStatus = false;
    });
  }

  // Emite mensagems para o servidor
  emit(event: string, payload?: any, callback?: Function) {
    console.log('Emitindo mensagem...');
    this.socket.emit(event, payload, callback);
  }

  // Ouve os eventos do servidor
  listen(event: string) {
    return this.socket.fromEvent(event);
  }
}
