import { Component, OnInit, Input } from '@angular/core';
// import { PostObject, CommonService } from "./../common.service";

@Component({
  selector: 'app-cv-card2',
  templateUrl: './cv-card2.component.html',
  styleUrls: ['./cv-card2.component.css']
})

export class CvCard2Component implements OnInit {

  @Input() cv: any;
  
  constructor() { }

  ngOnInit(): void {

  }
  
  deductCreditsViewCV (credits: number) {
    alert(credits + " credits deducted");
  }
}
