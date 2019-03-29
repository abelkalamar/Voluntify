import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  passwordError: string;

  constructor(
    private logService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'type': new FormControl(this.route.snapshot.params['type'])
    });
  }

  onSubmit(confPassword: string) {
    if (confPassword !== this.signupForm.value['password']) {
      return this.passwordError = 'Passwords don\'t match!'
    }
    this.logService.register(this.signupForm.value)
      .subscribe(data => {
        this.router.navigate(['/login']);
      }, (error: Error) => {
        console.log(error['error'].message);
      });
  }


}
