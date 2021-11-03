import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-vacancy',
  templateUrl: './post-vacancy.component.html',
  styleUrls: ['./post-vacancy.component.css']
})
export class PostVacancyComponent implements OnInit {

  max = 500;
  min = 0;
  step = 1;
  thumbLabel = true;
  value = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

}
