import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


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
}
