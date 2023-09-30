import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

class RegistrationModel {
  nombre: string;
  apellidos: string;
  email: string;
  url: string;
  contrasena: string;
  confirmarContrasena: string;
  aceptarTerminos: boolean;
}

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

