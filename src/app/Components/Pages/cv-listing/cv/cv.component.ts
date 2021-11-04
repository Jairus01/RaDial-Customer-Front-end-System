import { Component, OnInit } from '@angular/core';
import { CvCardComponent } from './../cv-card/cv-card.component';
// import { TestModalComponent } from "./../test-modal/app-test-modal";
import { PostObject, CommonService } from "./../common.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  searchText = "";
  
  constructor( private cs:CommonService ) { }

  
  ngOnInit(): void {

  }

}
