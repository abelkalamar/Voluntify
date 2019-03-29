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

  baseUrl = environment.baseUrl2;
  baseUrlLili = environment.baseUrlLili;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendUserData(userData): Observable<any> {
    const body = {
      firstName: userData.value.firstName,
      lastName: userData.value.lastName,
      mobileNumber: userData.value.mobileNumber,
      profession: userData.value.profession,
      age: userData.value.age,
      isLooking: userData.value.isOpen
    }
    // addData.append('firstName', userData.value.firstName);
    // addData.append('lastName', userData.value.lastName);
    // addData.append('mobileNumber', userData.value.mobileNumber);
    // addData.append('profession', userData.value.profession);
    // addData.append('age', userData.value.age);
    // addData.append('isLooking', userData.value.isOpen);
    // addData.append('file', userData['files'][0]);
    // // console.log(addData);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrl}/api/user/form`, body, { headers });
  }

  sendPicture(picture) {
    const userPicture = new FormData()
    userPicture.append('file', picture);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrl}/api/uploadFile`, userPicture, { headers });
  }

  getPrefereces() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    this.http.get(`${this.baseUrl}/api`, { headers });
  }

  searchUsers(formData: Object) {
    // const body = {
    //   'profession': formData.profession,
    //   'interest': formData.interest,
    //   'isLooking': formData.isLooking
    // }
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    return this.http.post(`${this.baseUrl}/api/user/search`, formData, { headers });
  }

  getEmail(): Observable<string> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', `Bearer ${window.localStorage.getItem('token')}`);
    return this.http.get<string>(`${this.baseUrlLili}/api/user/email`, { headers });
  }

}
