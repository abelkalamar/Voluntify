import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  profileDataForm: FormGroup;
  picturePath: string | ArrayBuffer;

  ngOnInit() {
    this.profileDataForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'picture': new FormControl(null),
      'age': new FormControl(null),
      'mobileNumber': new FormControl(null),
      'profession': new FormControl(null),
      'preference': new FormControl(null),
      'isOpen': new FormControl(null)
    });
  }

  constructor(
    private router: Router
  ) { }

  onFileAdded(event):void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.picturePath = reader.result;

      reader.readAsDataURL(file);
    }
  }

  onCancel() {
    this.router.navigate(['/main']);
  }

}
