import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from './guards/user-guard.guard';
import { LoginComponent } from "./pages/login/login.component";
import { MessagesComponent } from "./pages/messages/messages.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "messages", component: MessagesComponent, canActivate: [UserGuard] },
  { path: "*", component: LoginComponent },
];
 
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
