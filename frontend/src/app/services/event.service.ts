import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EventService {
  baseUrl: string = environment.baseUrl2;
  constructor(private http: HttpClient) { }

  getEvents() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    console.log('all events');
    return this.http.get(`${this.baseUrl}/api/event/all`, { headers });
  }
  getUserEvents() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    console.log('user events');
    // return this.http.get(`${this.baseUrl}/`, { headers });
  }
  getEventById(id: number) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    console.log('get detailed events');
    // return this.http.get(`${this.baseUrl}/api/event/id`, { headers });
  }
  applyEvent(id: number) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    console.log('applied');
    // return this.http.post(`${this.baseUrl}/api/event/id`, {id: id}, { headers } )
  }

  createEvent(eventData): Observable<any> {
    console.log('kay');
    const body = {
      type: 'Environmental',
      title: eventData.title,
      description: eventData.description,
      address: eventData.address,
      start: eventData.start,
      finish: eventData.finish
    };
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrl}/api/event`, body, { headers } );
  }
}
