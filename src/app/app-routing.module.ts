import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'login', component: LoginComponent,},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
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
