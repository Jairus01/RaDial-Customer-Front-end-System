import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostObject, CommonService} from './../common.service'


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  closeResult = '';
  testarray = [1,2];
  minValue: any;
  scheduleGroup : any;
  morningTime : any = "9:00 AM"
  afternoonTime : any = "2:00 PM"
  date : any = "13-11-2021";
  allGroup: any = []
 // @Input() public schedule: any;
  //@Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private cs:CommonService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.cs.list('schedule').subscribe(d=>{
      this.allGroup=(d as PostObject).data
      })
  }
  save(o :any){
    this.cs.save('schedule',o).subscribe(d=>{
      console.log(d)
      })
  }
  open(content: any) {
    this.minValue = new Date();
    this.modalService.open(content).result.then((result) => {
      this.scheduleGroup = {date: this.date, morningTime: this.morningTime, afternoonTime: this.afternoonTime}
      this.save(this.scheduleGroup)
      this.closeResult = `Closed with: ${result}`;
      this.loadData()
    }, (reason) => {
      this.closeResult = `Dismissed with ${reason}`;
    });
  }
}
