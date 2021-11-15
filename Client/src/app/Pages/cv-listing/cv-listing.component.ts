import { Component, OnInit } from '@angular/core';
import { CvCardComponent } from './cv-card/cv-card.component';
import { PostObject, CommonService } from 'src/app/Shared/_services/common.service';
@Component({
  selector: 'app-cv-listing',
  templateUrl: './cv-listing.component.html',
  styleUrls: ['./cv-listing.component.css']
})
export class CvListingComponent implements OnInit {
  searchText = "";
  showFilterPanel = false;

  highest_edu_level = ["~~select education level~~", "SPM", "Diploma", "Form 6/A level/Foundation", "Degree", "Others"];
  jobs = ["~~select job expertise~~", "Chef", "Construction Worker", "Carpenter", "Commercial Driver", "Truck Driver", "Bus Driver", "Logistic/Shipping", "Parcel Delivery", "Electrician", "Firefighter", "Fishing", "Janitor"];
  personalities = ["~~select a personality~~", "ESTJ", "ENTJ", "ESFJ", "ENFJ", "ISTJ", "ISFJ", "INTJ", "INFJ", "ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INTP", "INFP"];
  
  constructor( private cs:CommonService ) { }

  ngOnInit(): void {
  }

  triggerFilterPanel () {
    this.showFilterPanel = !this.showFilterPanel;
  }

  filterCV () {
    alert("5 credits deducted for using the filtering feature.\nEnjoy your CV~")
  }

}
