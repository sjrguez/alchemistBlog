import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../shared/model/user.interface';

import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authSrv: AuthService, private router: Router) { }


  ngOnInit() {



  }

  onLogin(form: UserInterface) {
    this.authSrv.loginWithEmail(form)
    .then(res => {
      console.log('success', res);
      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
    console.log('Form', form);
  }

}
