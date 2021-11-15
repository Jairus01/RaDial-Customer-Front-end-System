import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { CvListingComponent } from './Pages/cv-listing/cv-listing.component';
import { SubscribeComponent } from './Pages/subscribe/subscribe.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PostVacancyComponent } from './Pages/post-vacancy/post-vacancy.component';
import { ManageVacancyComponent } from './Pages/manage-vacancy/manage-vacancy.component';
import { ManageHiringCampaignComponent } from './Pages/manage-hiring-campaign/manage-hiring-campaign.component';
import { VacancyShortlistComponent } from './Pages/manage-hiring-campaign/vacancy-shortlist/vacancy-shortlist.component';
import { InterviewScheduleComponent } from './Pages/manage-hiring-campaign/interview-schedule/interview-schedule.component';
import { WalletComponent } from './Pages/wallet/wallet.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { InterviewListComponent } from './Pages/interview-list/interview-list.component';
import { ReceivedApplicantComponent } from './Pages/received-applicant/received-applicant.component';
import { RApplicantListComponent } from './Pages/r-applicant-list/r-applicant-list.component';


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'received-applicant', component:ReceivedApplicantComponent},
  {path: 'cv-listing', component:CvListingComponent},
  {path:'addapplicant',component:RApplicantListComponent},
  {path: 'subscribe', component:SubscribeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'post-vacancy', component:PostVacancyComponent},
  {path: 'manage-vacancy', component:ManageVacancyComponent},
  {path: 'vacancy-shortlist', component:ManageHiringCampaignComponent},
  {path: 'vacancy-shortlist/webdeveloper', component:VacancyShortlistComponent},
  {path: 'interview-schedule', component:InterviewScheduleComponent},
  {path: 'wallet', component:WalletComponent},
  {path: 'setting', component:SettingComponent},
  {path: 'interview', component: InterviewListComponent }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
