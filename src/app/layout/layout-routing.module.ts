import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const headerRoutes: Routes =  [
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(headerRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
