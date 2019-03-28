import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  baseUrl = environment.baseUrlLili;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendUserData(userData): Observable<any> {
    const addData = new FormData();
    // addData.append('firstName', userData.value.firstName);
    // addData.append('lastName', userData.value.lastName);
    // addData.append('mobileNumber', userData.value.mobileNumber);
    // addData.append('profession', userData.value.profession);
    // addData.append('age', userData.value.age);
    // addData.append('isLooking', userData.value.isOpen);
    addData.append('profile', userData['files'][0]);
    // console.log(addData);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrl}/api/user/form`, addData, { headers });
  }

  getPrefereces() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    this.http.get(`${this.baseUrl}/api`, { headers });
  }

}
