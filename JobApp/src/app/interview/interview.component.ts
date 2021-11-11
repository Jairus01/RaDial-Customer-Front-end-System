import { Component } from '@angular/core';

import { View, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-interview',
  //template: '<ejs-schedule height="850" width="1250" [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class InterviewComponent  {
  public setView: View = 'Month';
  public setDate: Date = new Date(2021,10,1);

  public eventObject:EventSettingsModel = {
    dataSource: [{
      id: 1,
      title : 'Testing',
      StartTime: new Date(2021,11,1,4,0),
      EndTime: new Date(2021,11,1,6,0)
    }]
  }
  

}
