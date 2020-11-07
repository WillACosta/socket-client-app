import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { FooterComponent } from "./components/footer/footer.component";
import { ChatComponent } from "./components/chat/chat.component";
import { UserlistComponent } from "./components/userlist/userlist.component";
import { LoginComponent } from "./pages/login/login.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";

const wsConfig: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    UserlistComponent,
    LoginComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(wsConfig),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
