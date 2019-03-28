import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(){
    console.log('all events');
  }
  getUserEvents(){
    console.log('user events');
  }
}
