import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/service/shared.module';
import { EmployeeComponent } from './modules/employees/employee/employee.component';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';
import { EmployeeService } from './modules/shared/service/employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,EmployeeComponent,EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
