import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  formData: FormGroup;

  constructor(
    private http: HttpClient,
    private userService: PersonalDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      'profession': new FormControl(''),
      'interest': new FormControl(''),
      'isLooking': new FormControl(false)
    });
  }

  onSubmit() {
    // this.userService.searchUsers(this.formData.value)
    //   .subscribe(result => {
    //     console.log(result);
    //   });
  }

  onCancel() {
    this.router.navigate(['/comp/main']);
  }

}
