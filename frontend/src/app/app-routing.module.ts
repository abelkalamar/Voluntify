import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { EventListComponent } from './components/main/event-list/event-list.component';
import { EventDetailComponent } from './components/main/event-detail/event-detail.component';
import { UpdateProfileComponent } from './components/main/update-profile/update-profile.component';
import { CreateEventComponent } from './components/comp-main/create-event/create-event.component';
import { SearchPeopleComponent } from './components/comp-main/search-people/search-people.component';
import { PersonDetailComponent } from './components/comp-main/person-detail/person-detail.component';
import { ContactusComponent } from './components/main/contactus/contactus.component';
import { CompMainComponent } from './components/comp-main/comp-main.component';
import { BaseComponent } from './components/comp-main/base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register/:type', component: RegisterComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', component: EventListComponent },
      { path: 'event/list', component: EventListComponent },
      { path: 'event/detail/:id', component: EventDetailComponent },
      { path: 'profile', component: UpdateProfileComponent },
      { path: 'contactus', component: ContactusComponent },
    ]
  },
  {
    path: 'comp/main', component: CompMainComponent, children: [
      { path: '', component: BaseComponent },
      { path: 'event/create', component: CreateEventComponent },
      { path: 'search', component: SearchPeopleComponent },
      { path: 'user/detail/:eventId', component: PersonDetailComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
