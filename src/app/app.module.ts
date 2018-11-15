import { LiveLinkService } from './live-link.service';
import { PreventLoggedInAccessService } from './auth/prevent-logged-in-access.service';
import { LoggedInService } from './logged-in.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { Route, Routes, RouterModule } from '@angular/router';

/* For Firebase Related */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'firebase';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LogComponent } from './log/log.component';
import { DurationPipe } from './duration.pipe';
import { EventListComponent } from './log/event-list/event-list.component';
import { EventItemComponent } from './log/event-list/event-item/event-item.component';
import { EventDetailsComponent } from './log/event-details/event-details.component';
import { OrderByPipe } from './order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import {CsvService} from "angular2-json2csv";
import { QuizDbComponent } from './quiz-db/quiz-db.component';
const appRoutes: Routes = [
  {path: '', component: SigninComponent}
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAutL08qJ8hTPM2860x-LHEAnDmgDEObRA',
  authDomain: 'fhc-ionic-app.firebaseapp.com',
  databaseURL: 'https://fhc-ionic-app.firebaseio.com',
  projectId: 'fhc-ionic-app',
  storageBucket: 'fhc-ionic-app.appspot.com',
  messagingSenderId: '928506390872'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    UsersComponent,
    UserDetailsComponent,
    LogComponent,
    DurationPipe,
    EventListComponent,
    EventItemComponent,
    EventDetailsComponent,
    OrderByPipe,
    QuizDbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ng2SearchPipeModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoggedInService,
    PreventLoggedInAccessService,
    LiveLinkService,
    CsvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
