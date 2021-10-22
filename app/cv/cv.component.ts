import { Component, OnInit } from '@angular/core';

import { PostObject, CommonService } from "./../common.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  // no need for this anymore, we're going dynamic
  // book_list = [
    // {name: "蔷薇少女馆 1", price: "19.90", color: "pink", image_src: "https://www.nicepng.com/png/detail/153-1535604_job-applicant-icon.png"},
    // {name: "蔷薇少女馆 1", price: "19.90", color: "pink", image_src: "assets/153-1535604_job-applicant-icon.png"},
	// {name: "蔷薇少女馆 2", price: "19.90", color: "pink", image_src: "assets/153-1535604_job-applicant-icon.png"},
	// {name: "蔷薇少女馆 3", price: "24.80", color: "pink", image_src: "assets153-1535604_job-applicant-icon.png"},
	// {name: "蔷薇少女馆 4", price: "24.80", color: "pink", image_src: "assets/153-1535604_job-applicant-icon.png"},
	// {name: "蔷薇少女馆 5", price: "24.80", color: "pink", image_src: "assets/153-1535604_job-applicant-icon.png"},
	// {name: "蔷薇少女馆 6", price: "24.80", color: "pink", image_src: "assets/153-1535604_job-applicant-icon.png"},
    // {name: "Book 2", price: "10.00", color: "gray", image_src: "assets/153-1535604_job-applicant-icon.png"},
  // ];
  
  cv_chunck = [];
  
  // this part is changed
  constructor( private cs:CommonService ) { }

  // added more stuff to process once landed on the page
  // refer to home.component.ts, don't redefine
  ngOnInit(): void {
	  this.cs.list().subscribe( data_chunck => {
		  this.cv_chunck = (data_chunck as PostObject).data;
		  console.log( data_chunck );
	  } );
  }

}
