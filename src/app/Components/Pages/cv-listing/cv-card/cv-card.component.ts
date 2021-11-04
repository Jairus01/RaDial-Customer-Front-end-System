import { Component, OnInit, Input } from '@angular/core';
import { PostObject, CommonService } from "./../common.service";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from "./../test-modal/test-modal.component";

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {

  cv_chunck = [];
  // cv_chunck = [
	// {"name":"Ali","cv_path":"somewhere.com?id=001","photo":"assets/images/job-applicant-clipart.png","education_level":"form 6","expertise":"construction","personality":"warm hearted","working_experience":"2 years"},
	// {"name":"Mustafah","cv_path":"somewhere.com?id=002","photo":"assets/images/job-applicant-clipart.png","education_level":"form 3","expertise":"gemstone","personality":"cool","working_experience":"13 years"},
	// {"name":"John","cv_path":"somewhere.com?id=003","photo":"assets/images/john_photo.png","education_level":"diploma","expertise":"taxi driver","personality":"funny","working_experience":"9 years"},
	// {"name":"Avraham","cv_path":"somewhere.com?id=004","photo":"assets/images/avraham.png","expertise":"cooking","education_level":"primary school","personality":"friendly","working_experience":"5 years"},
	// {"name":"Jasmine","cv_path":"somewhere.com?id=005","photo":"assets/images/job-applicant-clipart.png","expertise":"sewing","education_level":"primary school","personality":"welcoming","working_experience":"10 years"},
	// {"name":"Anna","cv_path":"somewhere.com?id=006","photo":"assets/images/job-applicant-clipart.png","expertise":"gardening","education_level":"degree","personality":"welcoming","working_experience":"7 years"},
	// {"name":"Moshe","cv_path":"somewhere.com?id=007","photo":"assets/images/job-applicant-clipart.png","expertise":"Torah","education_level":"yeshiva","personality":"welcoming","working_experience":"22 years"},
  // ];
  
  // searchText = "primary"; // take in from cv.component.ts
  @Input() searchText!: string;
  
  closeResult = '';
  // this part is changed
  constructor( private cs:CommonService, private modalService: NgbModal ) { }

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

  // added more stuff to process once landed on the page
  // refer to home.component.ts, don't redefine
  ngOnInit(): void {
	  // this part is already working, see server/index.js and server/user_mongoose.js
	  this.cs.listFullCV().subscribe( data_chunck => {
		 this.cv_chunck = (data_chunck as PostObject).data;
		 console.log( data_chunck );
	  } );
  }

}
