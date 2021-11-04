import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'; //Angular Material Toolbar Module
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

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

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InterviewScheduleDialogComponent } from './Components/Pages/manage-hiring-campaign/vacancy-shortlist/interview-schedule-dialog/interview-schedule-dialog.component'; //vacancyshortlist form

// do "npm i ng2-search-filter --save"
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// see "imports" section down there too

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
    InterviewScheduleDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FontAwesomeModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    FormsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
