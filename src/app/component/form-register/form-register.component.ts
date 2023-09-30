import { Component } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  registrationModel: RegistrationModel = new RegistrationModel();

  onSubmit(form: NgForm) {
    if (form.valid) {
      
      console.log('Form submitted successfully!', this.registrationModel);
    } else {
    }
  }
}

