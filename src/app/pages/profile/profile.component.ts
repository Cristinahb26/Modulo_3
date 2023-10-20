import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

     public user: User;

  constructor(public userService: UserService){

      this.user = new User(1, "Zoe", "Fernandez", "zoeFernandez@gmail.com", "https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcmElMjBkZSUyMG11amVyfGVufDB8fDB8fHww&w=1000&q=80", "Zoef1234")
  
    }

   public enviar(name:string, last_name:string, email:string, photo:string){

      this.user.name = name;
      this.user.last_name = last_name;
      this.user.email = email;
      this.user.photo = photo;
      

   /* Llamar al servicio para actualizar el perfil */
   this.userService.edit(new User(0, name, last_name, email, photo, null)).subscribe(() => {
      console.log('Perfil modificado exitosamente');
     })
  }
}
