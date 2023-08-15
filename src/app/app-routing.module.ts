import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [

  { path: "", component: HomeComponent},
  { path: "header", component: HeaderComponent},
  { path: "home", component: HomeComponent},
  { path: "register", component: RegisterComponent},
  { path: "footer", component: FooterComponent},
  { path: "profile", component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
