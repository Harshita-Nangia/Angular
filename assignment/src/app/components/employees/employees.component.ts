import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public newEmployee = new Employee("","","",new Date(),{
    line1:"",
    line2:"",
    city:"",
    state:"",
    pincode:""
  })
  constructor() { }

  ngOnInit(): void {
  }

  log(formState: any){
    if(formState.valid){
      console.log(this.newEmployee);
    } else {
      alert("The form is not valid")
    }
  }

}
