import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SessionLayoutComponent } from './layouts/session-layout/session-layout.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';

const routes: Routes = [
  {path: '', component: SessionLayoutComponent,children:[
    {path: 'user', component: UserManagementComponent, data:{  } },
    {path: 'employee', component: EmployeeManagementComponent, data:{  } },
    {path: 'patient', component: PatientManagementComponent, data:{  } },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
