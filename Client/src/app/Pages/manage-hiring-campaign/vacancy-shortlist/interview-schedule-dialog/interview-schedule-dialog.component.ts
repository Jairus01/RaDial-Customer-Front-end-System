import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VacancyShortlist } from 'src/app/Shared/_services/vacancy-shortlist';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Schedule } from 'src/app/Models/model/schedule';
import { CommonService, PostObject} from 'src/app/Shared/_services/common.service';
import { DatePipe } from '@angular/common';

interface Session {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-interview-schedule-dialog',
  templateUrl: './interview-schedule-dialog.component.html',
  template: `{{ time | date:'HH:mm:ss'}}`,
  styleUrls: ['./interview-schedule-dialog.component.css'],
  providers : [DatePipe]

})

export class InterviewScheduleDialogComponent implements OnInit {

  today : any;

  constructor(
    private cs: CommonService, 
    private shortlistService:VacancyShortlist, 
    @Inject(MAT_DIALOG_DATA) public data:any,
    private datePipe: DatePipe) { 
    this.today = new Date();
    this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
  }

  // sessions: Session[] = [
  //   {value: 'Group 1', viewValue: 'Group 1'},
  //   {value: 'Group 2', viewValue: 'Group 2'}
  // ];

  sessions: any = [];


  date = new FormControl(new Date());
  
  schedule: Schedule = {
    session:'',
  };

  ngOnInit(): void {
    this.loadSession();
  }

  loadDataFromServer() {
    this.shortlistService.listReceivedApplicant().subscribe()
  }

  loadSession(){
    this.cs.listSchedule('schedule').subscribe(d=>{
      this.sessions=(d as PostObject).data
      })
  }

  save(name:string) {
    const nname = name
    const ndate = this.date.value

    var newschedule = {
      "applicantName": nname,
      "date": ndate,
      "session": this.schedule.session
    }

    console.log(newschedule)

    this.shortlistService.saveInterviewSchedule(newschedule).subscribe()

  }


}
