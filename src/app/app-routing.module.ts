import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';



const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"*" , component:LoginComponent},
  {path:"Registration", component:RegistrationComponent},
  {path:"submit", component:LoginComponent},
  {path:"employee", component:EmployeeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);