import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { PostObject, CommonService} from './../common.service'


@Component({
  selector: 'app-subscribe-service',
  templateUrl: './subscribe-service.component.html',
  styleUrls: ['./subscribe-service.component.css']
})

export class SubscribeServiceComponent implements OnInit {
  datePipe: DatePipe = new DatePipe('en-US');
  myService : any = []
  selectedService : any = {}
  subscribeService: any = {}

  constructor(private modalService: NgbModal, private cs:CommonService) {}
 
  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.cs.list('service').subscribe(d=>{
      console.log(d)
      this.myService=(d as PostObject).data
      })
  }
  loadSelected(o:any){
    this.cs.load('service/',o['_id']).subscribe(d=>{
      console.log(d)
      this.selectedService=(d as PostObject).data
      })
  }
  
  
  saveService(o : any){
    this.cs.save('subscribe',o).subscribe(d=>{
      console.log(d)
      })
  }
  
  getCurrentDate(){
    var date = new Date();
    let latest_date = this.datePipe.transform(date, 'dd-MM-yyyy');
    return latest_date;
  }

  getEndDate(){
    var date = new Date();
    date.setDate(date.getDate()+30);
    let latest_date =this.datePipe.transform(date, 'dd-MM-yyyy');
    return latest_date;
  }

  
  open(content: any, o:any) {
    this.loadSelected(o)
  
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.subscribeService = {company: "1", service: this.selectedService._id , startDate:this.getCurrentDate(), endDate:this.getEndDate()}
      this.saveService(this.subscribeService)  
    });
  }
}
