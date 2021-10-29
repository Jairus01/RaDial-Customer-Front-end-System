import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostVacancyComponent } from './post-vacancy/post-vacancy.component';
const routes: Routes = [
  
  {path:'pvpage',component:PostVacancyComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
