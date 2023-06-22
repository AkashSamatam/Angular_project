import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'login', component:LoginComponent  },
  {path: 'sellerlogin', component:SellerloginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'home',component:HomeComponent},
  {path:'**', component: WelcomepageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
