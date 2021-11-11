import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubscribeServiceComponent } from './subscribe-service/subscribe-service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterviewComponent } from './interview/interview.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { InterviewListComponent } from './interview-list/interview-list.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleComponent } from './schedule/schedule.component';
import { BlablaComponent } from './blabla/blabla.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SubscribeServiceComponent,
    InterviewComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    InterviewListComponent,
    ScheduleComponent,
    BlablaComponent
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ScheduleModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    DatePickerModule,
    TimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
