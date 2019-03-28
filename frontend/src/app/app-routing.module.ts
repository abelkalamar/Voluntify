import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { EventListComponent } from './components/main/event-list/event-list.component';
import { EventDetailComponent } from './components/main/event-detail/event-detail.component';
import { UpdateProfileComponent } from './components/main/update-profile/update-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'event/list', component: EventListComponent },
      { path: 'event/detail', component: EventDetailComponent },
      { path: 'profile', component: UpdateProfileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
