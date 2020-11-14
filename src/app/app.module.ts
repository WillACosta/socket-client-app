import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { ChatComponent } from "./components/chat/chat.component";
import { UserlistComponent } from "./components/userlist/userlist.component";
import { LoginComponent } from "./pages/login/login.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";

import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const wsConfig: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UserlistComponent,
    LoginComponent,
    MessagesComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(wsConfig),
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
