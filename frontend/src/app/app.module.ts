import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { EventListComponent } from './components/main/event-list/event-list.component';
import { EventDetailComponent } from './components/main/event-detail/event-detail.component';
import { UpdateProfileComponent } from './components/main/update-profile/update-profile.component';
import { CreateEventComponent } from './components/comp-main/create-event/create-event.component';
import { SearchPeopleComponent } from './components/comp-main/search-people/search-people.component';
import { PersonDetailComponent } from './components/comp-main/person-detail/person-detail.component';
import { CompMainComponent } from './components/comp-main/comp-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { CompNavbarComponent } from './components/comp-main/comp-navbar/comp-navbar.component';
import { ContactusComponent } from './components/main/contactus/contactus.component';

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
    NavbarComponent,
    CompMainComponent,
    CompNavbarComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
