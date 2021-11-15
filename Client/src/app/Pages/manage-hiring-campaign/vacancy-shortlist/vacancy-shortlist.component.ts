import { Component, OnInit } from '@angular/core';
import { PostObject, VacancyShortlist } from 'src/app/Shared/_services/vacancy-shortlist';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { InterviewScheduleDialogComponent } from './interview-schedule-dialog/interview-schedule-dialog.component';
//import { ReceivedApplicant } from 'src/app/Models/model/received-applicant.model';

@Component({
  selector: 'app-vacancy-shortlist',
  templateUrl: './vacancy-shortlist.component.html',
  styleUrls: ['./vacancy-shortlist.component.css']
})
export class VacancyShortlistComponent implements OnInit {

  constructor(private shortlistService:VacancyShortlist, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDataFromServer();
  }

  applicant = [
    'People 1',
    'People 2',
    'People 3'
  ];

  shortlist = [
    'People 4',
    'People 5',
    'People 6'
  ];

  receivedApplicants = [
    {name:'Danny',applied_position:'Web Applicant'},
    {name:'Abu',applied_position:'Web Applicant'},
    {name:'Eshan',applied_position:'Web Applicant'}
  ]

  loadDataFromServer() {
    this.shortlistService.listReceivedApplicant().subscribe(d=>{
      this.receivedApplicants=(d as PostObject).data
      console.log(d)
    })
  }

  // applicants?:ReceivedApplicant[];
  
  // retrieveApplicant():void{
  //   this.shortlistService.getAll()
  //     .subscribe(
  //       data => {
  //         this.applicants = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.receivedApplicants, event.previousIndex, event.currentIndex);
  }

  openDialog(iname:string) {
    const dialogRef = this.dialog.open(InterviewScheduleDialogComponent, {data:{name: iname}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
