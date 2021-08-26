import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const authenticationRoutes: Routes = [
  {path: '', component:LoginComponent},
  // {path: 'name', component:LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authenticationRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { 
 }
