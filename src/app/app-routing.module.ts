import { EventDetailsComponent } from './log/event-details/event-details.component';
import { LogComponent } from './log/log.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { PreventLoggedInAccessService } from './auth/prevent-logged-in-access.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path: '', redirectTo: '/quiz', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid', component: UserDetailsComponent, canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent, canActivate: [PreventLoggedInAccessService] },
  {path: 'quiz', component: LogComponent, canActivate: [AuthGuard], children: [
    {path: ':id', component: EventDetailsComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
