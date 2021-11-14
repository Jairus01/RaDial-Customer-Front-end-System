import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostObject, CommonService } from "./../../common.service";

@Component({
  selector: 'app-cv-filter',
  templateUrl: './cv-filter.component.html',
  styleUrls: ['./cv-filter.component.css']
})
export class CvFilterComponent implements OnInit {
  
  cv_chunck = [];
  filtered_cv = [];
  
  showFilterPanel = false;

  highest_edu_level = ["~Ignore Highest Education Level~", "SPM", "Diploma", "Form 6/A level/Foundation", "Degree", "Others"];
  jobs = ["~Ignore Job Expertise~", "Chef", "Construction Worker", "Carpenter", "Commercial Driver", "Lorry Driver", "Bus Driver", "Logistic/Shipping", "Parcel Delivery", "Electrician", "Firefighter", "Fishing", "Janitor"];
  personalities = ["~Ignore Personality~", "ESTJ", "ENTJ", "ESFJ", "ENFJ", "ISTJ", "ISFJ", "INTJ", "INFJ", "ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INTP", "INFP"];

  // default values for range -- age and working experience
  
  ageMin = 10; ageMax = 100;
  weMin = 0; weMax = 50;
  chosenHighestEdu = "";
  chosenJobExpertise = "";
  chosenPersonality = "";
  
  actual_highest_edu = "";
  actual_personality = "";
  actual_job_expertise = "";
  actual_we = 0; actual_age = 0;
  
  filterButtonClicked = false;
  @Output() isFilteredCV = new EventEmitter<{hasFilteredCV: boolean}>();
  
  constructor( private cs:CommonService ) { }

  ngOnInit(): void {
    this.cs.listFullCV().subscribe( data_chunck => {
      this.cv_chunck = (data_chunck as PostObject).data;
      //console.log( data_chunck );
    } );
  }
  
  triggerFilterPanel () {
    this.showFilterPanel = !this.showFilterPanel;
  }

  filterCV () {
    // emit an event to cv2
	this.isFilteredCV.emit({hasFilteredCV: true});
	// now it's time to process data
    // clear previous data
	this.actual_we = 0; // end of process, must make it back to 0, if not it will stor ethe last cv data
	this.actual_age = 0;
	this.actual_job_expertise = "";
	this.actual_highest_edu = "";
	this.actual_personality = "";
	this.filtered_cv = [];
    
    this.filterButtonClicked = true; // seems useless
    // do manual filtering
    // console.log( this.cv_chunck[0] );
	
	// filter working experience
    
    for ( let i=0; i<this.cv_chunck.length; i++ ) {
      //console.log(i);
	  
	  // set actual values first
	  this.actual_we = parseInt(this.cv_chunck[i]["working_experience"]);
	  this.actual_age = parseInt(this.cv_chunck[i]["age"]);
	  this.actual_highest_edu = this.cv_chunck[i]["education_level"];
	  this.actual_job_expertise = this.cv_chunck[i]["expertise"];
	  this.actual_personality = this.cv_chunck[i]["personality"];
	  
	  // do checking
	  // 1st line: working experience
	  // 2nd line: age
	  // 3rd line: highest education (ignore criteria is not set)
	  // 4th line: job expertise (ignore criteria is not set)
	  // 5th line: personality (ignore criteria is not set)
      if ( 
	    (this.actual_we >= this.weMin && this.actual_we <= this.weMax) &&
		(this.actual_age >= this.ageMin && this.actual_age <= this.ageMax) &&
		(this.chosenHighestEdu === "~Ignore Highest Education Level~" || this.chosenHighestEdu === "" || this.actual_highest_edu === this.chosenHighestEdu) &&
		(this.chosenJobExpertise === "~Ignore Job Expertise~" || this.chosenJobExpertise === "" || this.actual_job_expertise === this.chosenJobExpertise) &&
		(this.chosenPersonality === "~Ignore Personality~" || this.chosenPersonality === "" || this.actual_personality === this.chosenPersonality)
		) {
          this.filtered_cv.push( this.cv_chunck[i] );
      }
    }
	
	// console.log("Filtered data");
	console.log( this.filtered_cv );
    // alert("Filtering backend unimplemented")
  }
}
