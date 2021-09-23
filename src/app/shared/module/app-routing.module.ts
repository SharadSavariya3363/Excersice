import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'login', loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard.module').then(m => m.DashboardModule)},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
