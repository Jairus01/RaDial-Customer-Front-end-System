import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
	
  cv_chunck = [
	{"name":"Ali","cv_path":"somewhere.com?id=001","photo":"assets/images/job-applicant-clipart.png","education_level":"form 6","expertise":"construction","personality":"warm hearted","working_experience":"2 years"},
	{"name":"Mustafah","cv_path":"somewhere.com?id=002","photo":"assets/images/job-applicant-clipart.png","education_level":"form 3","expertise":"gemstone","personality":"cool","working_experience":"13 years"},
	{"name":"John","cv_path":"somewhere.com?id=003","photo":"assets/images/john_photo.png","education_level":"diploma","expertise":"taxi driver","personality":"funny","working_experience":"9 years"},
	{"name":"Avraham","cv_path":"somewhere.com?id=004","photo":"assets/images/avraham.png","expertise":"cooking","education_level":"primary school","personality":"friendly","working_experience":"5 years"},
	{"name":"Jasmine","cv_path":"somewhere.com?id=005","photo":"assets/images/job-applicant-clipart.png","expertise":"sewing","education_level":"primary school","personality":"welcoming","working_experience":"10 years"},
	{"name":"Anna","cv_path":"somewhere.com?id=006","photo":"assets/images/job-applicant-clipart.png","expertise":"gardening","education_level":"degree","personality":"welcoming","working_experience":"7 years"},
	{"name":"Moshe","cv_path":"somewhere.com?id=007","photo":"assets/images/job-applicant-clipart.png","expertise":"Torah","education_level":"yeshiva","personality":"welcoming","working_experience":"22 years"},
  ];
	
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'myModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
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

  ngOnInit(): void {
  }

}
