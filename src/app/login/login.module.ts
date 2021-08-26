import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes : Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class LoginModule { 
  constructor(){
    console.log("Login Module Loaded!");
  }
 }
