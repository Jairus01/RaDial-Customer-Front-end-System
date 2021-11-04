import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { ResetPasswordComponent } from './Components/Pages/reset-password/reset-password.component';
import { CvListingComponent } from './Components/Pages/cv-listing/cv-listing.component';
import { SubscribeServiceComponent } from './Components/Pages/subscribe-service/subscribe-service.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { PostVacancyComponent } from './Components/Pages/post-vacancy/post-vacancy.component';
import { ManageVacancyComponent } from './Components/Pages/manage-vacancy/manage-vacancy.component';
import { ReceivedApplicationsComponent } from './Components/Pages/received-applications/received-applications.component';
import { ManageHiringCampaignComponent } from './Components/Pages/manage-hiring-campaign/manage-hiring-campaign.component';
import { VacancyShortlistComponent } from './Components/Pages/manage-hiring-campaign/vacancy-shortlist/vacancy-shortlist.component';
import { InterviewScheduleComponent } from './Components/Pages/manage-hiring-campaign/interview-schedule/interview-schedule.component';
import { WalletComponent } from './Components/Pages/wallet/wallet.component';
import { SettingComponent } from './Components/Pages/setting/setting.component';


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'cv-listing', component:CvListingComponent},
  {path: 'subscribe-service', component:SubscribeServiceComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'post-vacancy', component:PostVacancyComponent},
  {path: 'manage-vacancy', component:ManageVacancyComponent},
  {path: 'received-applications', component:ReceivedApplicationsComponent},
  {path: 'vacancy-shortlist', component:ManageHiringCampaignComponent},
  {path: 'vacancy-shortlist/webdeveloper', component:VacancyShortlistComponent},
  {path: 'interview-schedule', component:InterviewScheduleComponent},
  {path: 'wallet', component:WalletComponent},
  {path: 'setting', component:SettingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
