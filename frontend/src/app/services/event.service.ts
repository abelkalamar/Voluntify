import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EventService {
  baseUrl: string = environment.baseUrl2;
  constructor(private http: HttpClient) { }

  getEvents() {
    console.log('all events');
    // return this.http.get(`${this.baseUrl}/`);
  }
  getUserEvents() {
    console.log('user events');
    // return this.http.get(`${this.baseUrl}/`);
  }
}
