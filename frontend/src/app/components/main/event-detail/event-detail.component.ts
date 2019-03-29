import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  valid = false;
  eventId: number;
  event = {id: this.eventId,
    title: 'First title',
    start: '2019. 10. 10. 10:00',
    finish: '2019. 11. 10. 23:00',
    address: 'Green Fox Academy, Andrássy street',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };
  constructor(private router: Router, private eventService: EventService) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.eventId = parseInt(value.url.slice(19));
      }
    });
  }
  changeEvent(event) {
    if (event.target.checked) {
        this.valid = true;
    } else {
        this.valid = false;
    }
}

  ngOnInit() {
    this.eventService.getEventById(this.eventId)
    // .subscribe(event => {
    // console.log(event);
    // })
  }

  apply() {
    this.eventService.applyEvent(this.eventId);
    // .subscribe(res => {
      this.router.navigate(['/main/event/list']);
    // });
  }

}
