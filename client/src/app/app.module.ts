import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatNativeDateModule} from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { CvListingComponent } from './Pages/cv-listing/cv-listing.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { InterviewListComponent } from './Pages/interview-list/interview-list.component';
import { ManageHiringCampaignComponent } from './Pages/manage-hiring-campaign/manage-hiring-campaign.component';
import { ManageVacancyComponent } from './Pages/manage-vacancy/manage-vacancy.component';
import { PostVacancyComponent } from './Pages/post-vacancy/post-vacancy.component';
import { RApplicantListComponent } from './Pages/r-applicant-list/r-applicant-list.component';
import { ReceivedApplicantComponent } from './Pages/received-applicant/received-applicant.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { SubscribeComponent } from './Pages/subscribe/subscribe.component';
import { WalletComponent } from './Pages/wallet/wallet.component';

import { authInterceptorProviders } from './Shared/_helpers/auth.interceptor';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VacancyShortlistComponent } from './Pages/manage-hiring-campaign/vacancy-shortlist/vacancy-shortlist.component';
import { InterviewScheduleComponent } from './Pages/manage-hiring-campaign/interview-schedule/interview-schedule.component';
import { InterviewScheduleDialogComponent } from './Pages/manage-hiring-campaign/vacancy-shortlist/interview-schedule-dialog/interview-schedule-dialog.component';
import { CvCardComponent } from './Pages/cv-listing/cv-card/cv-card.component';

import { SearchPipe } from './Pages/manage-hiring-campaign/interview-schedule/searchPipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    CvListingComponent,
    DashboardComponent,
    InterviewListComponent,
    ManageHiringCampaignComponent,
    ManageVacancyComponent,
    PostVacancyComponent,
    RApplicantListComponent,
    ReceivedApplicantComponent,
    SettingComponent,
    SubscribeComponent,
    WalletComponent,
    NavBarComponent,
    VacancyShortlistComponent,
    InterviewScheduleComponent,
    InterviewScheduleDialogComponent,
    CvCardComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    NgbModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    DragDropModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
