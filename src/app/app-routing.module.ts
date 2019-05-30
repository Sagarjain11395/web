import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import { AboutComponent } from './about/about.component';
import { SubhomeComponent } from './subhome/subhome.component';
import { SubservicesComponent } from './subservices/subservices.component';

const routes: Routes = [

  {path:'employee',component:EmployeeComponent},
  {path:'about',component:AboutComponent},
  {path:'subhome',component:SubhomeComponent},
  {path:'subservices',component:SubservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
