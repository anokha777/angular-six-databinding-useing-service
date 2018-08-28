import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { UserService } from './services/user/user.service';
import { CounterService } from './services/counter/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
