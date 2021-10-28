import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})


export class DashboardComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {

  }

  showChild(){
    var panel = document.getElementById("panel1");
    if(panel != null)
      if(panel.style.display == '' || panel.style.display == 'none'){
        panel.style.display = 'block';
      }
      else {
        panel.style.display = 'none';
      }
    }
  

}
