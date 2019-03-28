import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  justUserEvents:boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if(value.url !== '/main'){
          this.justUserEvents === true;
        }
      }
    });
   }

  ngOnInit() {
  }

}
