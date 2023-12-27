import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SessionLayoutComponent } from './layouts/session-layout/session-layout.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '', component: SessionLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent, data: {} },
      { path: 'user', component: UserManagementComponent, data: {} },
      { path: 'employee', component: EmployeeManagementComponent, data: {} },
      { path: 'patient', component: PatientManagementComponent, data: {} },
    ]
  },
  {
    path: '', component: LoginLayoutComponent, children: [
      { path: 'login', component: LoginComponent, data: {} },
    ]
  }
];

// const routes: Routes = [
//   { path: '', component: UserManagementComponent, outlet: 'main' }, // Use 'main' outlet for main layout
//   { path: 'dashboard', component: DashboardComponent, outlet: 'main' },
//   { path: 'login', component: LoginComponent, outlet: 'login' }, // Use 'dashboard' outlet for dashboard layout
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
