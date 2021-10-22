import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// implements will work because or line 1
export class AppComponent {
  title = 'Pearl';
  // vars for the templating system
  // it can be anything since there are all exported
  // accessed using double curly braces
  type = "gemstone";
  material = "nacre";

}
