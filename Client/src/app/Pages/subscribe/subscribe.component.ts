import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscribe } from 'src/app/Models/model/subscribe.model';
import { SubscribeService } from 'src/app/Shared/_services/subscribe.service';
import { TokenStorageService } from 'src/app/Shared/_services/token-storage.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribe:Subscribe={
    service_name:'',
    
  }
  submitted= false;
  isSuccessful = false;
  closeResult : string | undefined;
  constructor(private modalService: NgbModal,private tokenStorageService: TokenStorageService,private SubscribeService:SubscribeService) {}
  

  ngOnInit(): void {
  }
  datePipe: DatePipe = new DatePipe('en-US');

  getCurrentDate(){
    var date = new Date();
    let current_date = this.datePipe.transform(date, 'dd-MM-yyyy');
    return current_date;
  }

  getEndDate(){
    var date = new Date();
    date.setDate(date.getDate()+30);
    let end_date =this.datePipe.transform(date, 'dd-MM-yyyy');
    return end_date;
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
  
  saveSubscribe(): void {
    const user = this.tokenStorageService.getUser();
    const data = {
      service_name: this.subscribe.service_name,
      start_date: this.getCurrentDate(),
      end_date:this.getEndDate(),
      user_id:user.id,
    };

    this.SubscribeService.create_Subscribe(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.isSuccessful = true;
        },
        error => {
          console.log(error);
        });
  }

}
