import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public form_login: FormGroup;

  ngOnInit(){
    
    let minPassLength = 8;

    this.form_login = new FormGroup({

      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(minPassLength)])
    
    })

  }

  entrar(){

    let email = this.form_login.get('email').value;
    let password = this.form_login.get('password').value;

    console.log(email);
    console.log(password);

  }

}
