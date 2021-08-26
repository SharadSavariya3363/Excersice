import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';


const headerRoutes: Routes =  [
  {path: '', component: HeaderComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(headerRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HeaderModule { 
  constructor(){
    console.log("Header Module Loaded!");
  }
 }
