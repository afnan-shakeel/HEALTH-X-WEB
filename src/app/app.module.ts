import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { SessionLayoutComponent } from './layouts/session-layout/session-layout.component';
import { UserSearchBoxComponent } from './components/user/user-search-box/user-search-box.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { PatientsSearchBoxComponent } from './components/patients/patients-search-box/patients-search-box.component';
import { PatientsTableComponent } from './components/patients/patients-table/patients-table.component';
import { PatientsFormComponent } from './components/patients/patients-form/patients-form.component';
import { EmployeeSearchBoxComponent } from './components/employees/employee-search-box/employee-search-box.component';
import { EmployeesTableComponent } from './components/employees/employees-table/employees-table.component';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';
import { PaginationComponent } from './components/ext/pagination/pagination.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { SearchBoxComponent } from './components/ext/search-box/search-box.component';
import { TableDefaultComponent } from './components/ext/table-default/table-default.component';

import { NumberInputDirective } from './directives/number-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    SessionLayoutComponent,
    UserSearchBoxComponent,
    UserTableComponent,
    UserFormComponent,
    PatientsSearchBoxComponent,
    PatientsTableComponent,
    PatientsFormComponent,
    EmployeeSearchBoxComponent,
    EmployeesTableComponent,
    EmployeesFormComponent,
    PaginationComponent,
    DashboardComponent,
    LoginComponent,
    UserManagementComponent,
    EmployeeManagementComponent,
    PatientManagementComponent,
    SearchBoxComponent,
    TableDefaultComponent,


    NumberInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
