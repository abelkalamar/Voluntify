import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  profileDataForm: FormGroup;
  picturePath: string | ArrayBuffer;
  responseText;

  ngOnInit() {
    this.profileDataForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'age': new FormControl(0),
      'mobileNumber': new FormControl(null),
      'profession': new FormControl(null),
      'preference': new FormControl(null),
      'isOpen': new FormControl(null)
    });

  }

  constructor(
    private router: Router,
    private userService: PersonalDataService
  ) { }

  onFileAdded(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.picturePath = reader.result;

      reader.readAsDataURL(file);
    }

    this.userService.sendPicture(event.target.files[0])
      .subscribe(result => {
        console.log(result);
        window.localStorage.setItem('picUrl', result['fileDownloadUri']);
      });
  }

  onCancel() {
    this.router.navigate(['/main']);
  }

  onSubmit() {
    this.userService.sendUserData(this.profileDataForm)
      .subscribe(response => {
        console.log(response);
      });
  }
}
