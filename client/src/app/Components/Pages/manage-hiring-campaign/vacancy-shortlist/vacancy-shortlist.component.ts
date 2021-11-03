import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PostObject, CommonService } from 'src/app/common.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { InterviewScheduleDialogComponent } from './interview-schedule-dialog/interview-schedule-dialog.component';

@Component({
  selector: 'app-vacancy-shortlist',
  templateUrl: './vacancy-shortlist.component.html',
  styleUrls: ['./vacancy-shortlist.component.css']
})

export class VacancyShortlistComponent implements OnInit {

  constructor(private modalService: NgbModal, private cs:CommonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDataFromServer()
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
    {name:'Lily',applyFor:'Yellow'},
    {name:'Lily',applyFor:'Yellow'}
  ]

  loadDataFromServer() {
    this.cs.list().subscribe(d=>{
      this.receivedApplicants=(d as PostObject).data
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  openDialog(iname:string) {
    const dialogRef = this.dialog.open(InterviewScheduleDialogComponent, {data:{name: iname}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeResult : string | undefined;


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}


export class CdkDragDropConnectedSortingExample {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
