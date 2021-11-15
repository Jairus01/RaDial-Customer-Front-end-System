import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PostObject, CommonService } from 'src/app/Shared/_services/common.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interview-schedule',
  templateUrl: './interview-schedule.component.html',
  styleUrls: ['./interview-schedule.component.css'],
  providers : [DatePipe]
})

export class InterviewScheduleComponent implements OnInit {
  closeResult = '';
  testarray = [1,2];
  minDate: any;
  scheduleGroup : any = {};
  allGroup: any = [];
  modelRef: NgbModalRef | any;
  allinterview : any = []
  upcoming : any = []
  today : any;
  statusOpen : string = "open";
  
  tomorrow : any;
  //public month: number = new Date().getMonth();
  //public fullYear: number = new Date().getFullYear();
  //public date: number = new Date().getDate();
  //public minValue: Date = new Date(this.fullYear, this.month , this.date, 8, 0, 0);
  //public maxValue: Date = new Date(this.fullYear, this.month, this.date, 18, 0 ,0);
  constructor(private modalService: NgbModal, private cs:CommonService, private datePipe: DatePipe) {
    this.today = new Date();
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate()+1);
    this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.tomorrow = this.datePipe.transform(this.tomorrow, 'yyyy-MM-dd');
   }
  ngOnInit(): void {
    this.loadData()
    this.loadApplicant()
  }

  loadData(){
    this.cs.listSchedule('schedule').subscribe(d=>{
      this.allGroup=(d as PostObject).data
      this.allGroup = this.allGroup.sort((a : any, b: any) => (a.date > b.date ? 1 : -1));
      })
  }
  save(o :any){
    this.cs.saveSchedule('schedule',o).subscribe(d=>{
      console.log(d)
      })
  }
  loadApplicant(){
    this.cs.listSchedule('interview').subscribe(d=>{
      console.log(d)
      this.allinterview=(d as PostObject).data
      })
  }
  update(o:any){
    
  }
  open(content: any) {
    //this.minValue = new Date();
   // this.modalService.open(content).result.then((result) =>{ 
   

      //let date = (<HTMLInputElement>document.getElementById('date')).value;
     // let time = (<HTMLInputElement>document.getElementById('time')).value;
     // let name = (<HTMLInputElement>document.getElementById('name')).value;
     // let session = (<HTMLInputElement>document.getElementById('session')).value;
      //this.scheduleGroup = {date: date, time: time, name:name ,session:session};

     // this.save(this.scheduleGroup);
     // this.closeResult = `Closed with: ${result}`;
     // this.loadData()
    //, (reason) => {
     // this.closeResult = `Dismissed with ${reason}`;
   // });
 // }
  
  this.modelRef = this.modalService.open(content);
  (<HTMLInputElement>document.getElementById("date")).setAttribute("min", new Date().toLocaleDateString('en-ca'));

  }
  onSubmit(myForm: NgForm) {
    if(myForm.valid) {
      this.scheduleGroup.status = this.statusOpen;
        this.save(this.scheduleGroup);
        myForm.resetForm();
        
        //Close modal
        this.modelRef.dismiss();
        this.loadData();
    } else {
      
        alert('Please match the criteria for all fields.');  
    }
  }
}