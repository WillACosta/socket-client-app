import { Injectable } from "@angular/core";

import { Socket } from "ngx-socket-io";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class WebsocketsService {
  public serverStatus = false;
  private user: User = null;

  constructor(private socket: Socket) {
    this.getStorage();
    this.checkStatus();
  }

  getUser() {
    return this.user;
  }

  /** Verifica status do servidor */
  checkStatus() {
    this.socket.on("connect", () => {
      console.log("Sevidor Conectado");
      this.serverStatus = true;
    });

    this.socket.on("disconnect", () => {
      console.log("Sevidor Desconectado");
      this.serverStatus = false;
    });
  }

  // Emite mensagems para o servidor
  emit(event: string, payload?: any, callback?: Function) {
    // console.log("Emitindo mensagem...");
    this.socket.emit(event, payload, callback);
  }

  // Ouve os eventos do servidor
  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  /** Envia o usuário como evento para o servidor */
  loginWS(userName: string) {
    return new Promise((resolve, reject) => {
      this.emit("set-user", { name: userName }, (resp) => {
        this.user = new User(userName);
        this.saveOnStorage();
        resolve();
      });
    });
  }

  saveOnStorage() {
    localStorage.setItem("chatUser", JSON.stringify(this.user));
  }

  getStorage() {
    if (localStorage.getItem("chatUser")) {
      this.user = JSON.parse(localStorage.getItem("chatUser"));
      this.loginWS(this.user.name); // Salva o nome do usuário no backend
    }
  }
}
