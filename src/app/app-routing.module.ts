import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageVacancyComponent } from './manage-vacancy/manage-vacancy.component';
const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"vacancy/manage", component:ManageVacancyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
