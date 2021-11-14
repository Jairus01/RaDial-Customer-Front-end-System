import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv2',
  templateUrl: './cv2.component.html',
  styleUrls: ['./cv2.component.css']
})
export class Cv2Component implements OnInit {
 
  // property name and method name cannot be the same, will conflict
  hideSearchCVResult = false;
  constructor() { }

  ngOnInit(): void {
  }

  hideSearchResult ( filterResults: {hasFilteredCV: boolean} ) {
    if ( filterResults.hasFilteredCV ) {
		this.hideSearchCVResult = !this.hideSearchCVResult;
	}
  }
}
