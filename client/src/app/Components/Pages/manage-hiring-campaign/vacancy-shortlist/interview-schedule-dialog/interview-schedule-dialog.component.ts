import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-interview-schedule-dialog',
  templateUrl: './interview-schedule-dialog.component.html',
  template: `{{ time | date:'HH:mm:ss'}}`,
  styleUrls: ['./interview-schedule-dialog.component.css']
})
export class InterviewScheduleDialogComponent implements OnInit {

  constructor(private cs:CommonService, @Inject(MAT_DIALOG_DATA) public data:any) { }

  date = new FormControl(new Date());
  stime = new FormControl(new Date());
  etime = new FormControl(new Date());

  ngOnInit(): void {
  }

  loadDataFromServer() {
    this.cs.list().subscribe()
  }

  save(name:string) {
    const nname = name
    const ndate = this.date.value
    const nstime = this.stime.value
    const estime = this.etime.value

    var newschedule = {
      "applicantName": nname,
      "date": ndate,
      "startTime": nstime,
      "endTime": estime
    }

    console.log(newschedule)

    this.cs.save(newschedule).subscribe()

  }

}
