import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  h2{
    color:red;
  }  
  `]
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  allowNewSemester = true;
  semCreationStatus  = "No Semester was Created";
  name = "";
  constructor() {
    setTimeout(() => {
      this.allowNewSemester = false;
    }, 2000);
   }

  ngOnInit(): void {
  }
  onCreateSemester()
  {
    this.semCreationStatus = "Semester was Created !! and Semester is "+ this.name;
  }
  onKeyUpFunction(event)
  {
    this.name = event.target.value;
  }
  addSemester(event)
  {
    this.name = event.target.value;
  }
}
