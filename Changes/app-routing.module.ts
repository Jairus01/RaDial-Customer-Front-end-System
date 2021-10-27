import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeServiceComponent } from './subscribe-service/subscribe-service.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path : 'service', component:SubscribeServiceComponent},
  {path : 'homepage', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
