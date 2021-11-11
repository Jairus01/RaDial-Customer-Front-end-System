import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeServiceComponent } from './subscribe-service/subscribe-service.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path : 'service', component:SubscribeServiceComponent},
  {path : 'homepage', component:HomepageComponent},
  {path : 'interview', component:InterviewComponent},
  {path : 'interviewlist', component:InterviewListComponent},
  {path : 'schedule', component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
