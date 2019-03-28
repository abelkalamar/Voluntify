import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  signupForm: FormGroup;

  constructor(
    private logService: LoginService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'type': new FormControl(this.route.snapshot.params['type'])
    });
  }

  onSubmit() {
    // this.logService.register(this.signupForm.value);
    // this.signupForm.reset();
    console.log(this.signupForm.value);
  }
}
