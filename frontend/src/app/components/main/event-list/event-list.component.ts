import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  getAll: boolean = true;
  eventList;
  constructor(private router: Router, private eventService: EventService) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if (value.url !== '/main') {
          this.getAll = false;
        } else {
          this.getAll = true;

        }
      }
    });
  }

  ngOnInit() {
    if (this.getAll) {
      this.eventService.getEvents();
    } else {
      this.eventService.getUserEvents();
    }
  }


}
