import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-subscribe-service',
  templateUrl: './subscribe-service.component.html',
  styleUrls: ['./subscribe-service.component.css']
})
export class SubscribeServiceComponent implements OnInit {
  
  closeResult : string | undefined;
  constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
  }

  datePipe: DatePipe = new DatePipe('en-US');

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

