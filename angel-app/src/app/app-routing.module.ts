import { VigilantGuard } from './shared/security/guard/vigilant.guard';
import { LoginComponent } from './shared/security/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'security/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate:[VigilantGuard]},
  {path: 'security/login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
