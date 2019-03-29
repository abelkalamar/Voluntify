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
  event;

  constructor(private router: Router, private eventService: EventService) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.eventId = +(value.url.slice(19));
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
      .subscribe(event => {
        this.event = event;
        console.log(event);
      });
  }

  apply() {
    this.eventService.applyEvent(this.eventId)
      .subscribe(res => {
        this.router.navigate(['/main/event/list']);
      }, err => {
        console.log(err);
      });
  }

}
