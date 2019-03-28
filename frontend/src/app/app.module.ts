import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { EventListComponent } from './components/main/event-list/event-list.component';
import { EventDetailComponent } from './components/main/event-detail/event-detail.component';
import { UpdateProfileComponent } from './components/main/update-profile/update-profile.component';
import { CreateEventComponent } from './components/comp-main/create-event/create-event.component';
import { SearchPeopleComponent } from './components/comp-main/search-people/search-people.component';
import { PersonDetailComponent } from './components/comp-main/person-detail/person-detail.component';
import { CompMainComponent } from './components/comp-main/comp-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    EventListComponent,
    EventDetailComponent,
    UpdateProfileComponent,
    CreateEventComponent,
    SearchPeopleComponent,
    PersonDetailComponent,
    CompMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
