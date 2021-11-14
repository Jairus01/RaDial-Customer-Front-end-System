import { Component, OnInit, Input } from '@angular/core';
import { PostObject, CommonService } from "./../../common.service";

@Component({
  selector: 'app-cv-search',
  templateUrl: './cv-search.component.html',
  styleUrls: ['./cv-search.component.css']
})
export class CvSearchComponent implements OnInit {

  cv_chunck = [];
  searchText = "";
  @Input() hideCV !: boolean; // ! indicates runtime value passed in

  constructor( private cs:CommonService ) { }

  ngOnInit(): void {
    this.cs.listFullCV().subscribe( data_chunck => {
      this.cv_chunck = (data_chunck as PostObject).data;
	  console.log("From cv search component");
      console.log( data_chunck );
    } );
  }

}
