import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name = '';
  rollNo = '';
  mobileNo = '';
  email = '';
  data="";

  numberdata = [1,2,3,4,5,6,7,8,9,10];

  country = ['india','USA','United Kingdom','japan'];
  cdata = '';
  color="pink";
  colordata="";
  colors = ['red','blue','green','yellow'];

  getPickedColor()
  {
    return this.colordata;
  }
  showData(event)
  {
    this.data= "Roll No = "+this.rollNo+"<br> Name = "+this.name+"<br> Mobile Number = "+this.mobileNo+"<br> Email = "+this.email;
  }

   getColor()
   {
     return this.cdata == 'USA' ?'green':'blue';
   }
  constructor() { }

  ngOnInit(): void {
  }

}
