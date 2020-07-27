import { Component } from '@angular/core';
@Component({
    selector: '.app-semester',
  templateUrl: './semester.component.html',
})
export class SemesterComponent
{
  rollno = 26;
  name = "vaibhav";
  flag = true;
  getSemesterDetails()
  {
    return this.name;
  }
}