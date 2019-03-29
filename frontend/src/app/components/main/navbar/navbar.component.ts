import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selected: string = null;
  userEmail: string;

  constructor(
    private userService: PersonalDataService
  ) { }

  ngOnInit() {
    this.userService.getEmail()
      .subscribe((email) => {
        console.log(email);
        this.userEmail = email;
      }, (error) => {
        this.userEmail = error['error'].text;
        console.log('Error :', typeof error['error'].text);
        console.log('Error message:', error['error'].message);
        console.log(this.userEmail);
      });
  }

  select(item) {
    this.selected = item;
  }
}
