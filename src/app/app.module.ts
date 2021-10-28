import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'; //Angular Material Toolbar Module
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavBarComponent } from './Components/Shared/top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from './Components/Shared/side-nav-bar/side-nav-bar.component';
import { SubscribeServiceComponent } from './Components/Pages/subscribe-service/subscribe-service.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { ResetPasswordComponent } from './Components/Pages/reset-password/reset-password.component';
import { CvListingComponent } from './Components/Pages/cv-listing/cv-listing.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { PostVacancyComponent } from './Components/Pages/post-vacancy/post-vacancy.component';
import { ManageVacancyComponent } from './Components/Pages/manage-vacancy/manage-vacancy.component';
import { ReceivedApplicationsComponent } from './Components/Pages/received-applications/received-applications.component';
import { ManageHiringCampaignComponent } from './Components/Pages/manage-hiring-campaign/manage-hiring-campaign.component';
import { VacancyShortlistComponent } from './Components/Pages/manage-hiring-campaign/vacancy-shortlist/vacancy-shortlist.component';
import { InterviewScheduleComponent } from './Components/Pages/manage-hiring-campaign/interview-schedule/interview-schedule.component';
import { WalletComponent } from './Components/Pages/wallet/wallet.component';
import { SettingComponent } from './Components/Pages/setting/setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { DashboardChartComponent } from './Components/Shared/dashboard-chart/dashboard-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    SubscribeServiceComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    CvListingComponent,
    DashboardComponent,
    PostVacancyComponent,
    ManageVacancyComponent,
    ReceivedApplicationsComponent,
    ManageHiringCampaignComponent,
    VacancyShortlistComponent,
    InterviewScheduleComponent,
    WalletComponent,
    SettingComponent,
    HomepageComponent,
    DashboardChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
