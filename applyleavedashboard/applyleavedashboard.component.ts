import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators}from '@angular/forms';

@Component({
  selector: 'app-applyleavedashboard',
  templateUrl: './applyleavedashboard.component.html',
  styleUrls: ['./applyleavedashboard.component.scss']
})
export class ApplyleavedashboardComponent implements OnInit {

  LeaveForm!: FormGroup;
  submitted:boolean=false;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.LeaveForm=this.builder.group(
      {
      EmployeeId:["",Validators.required],
      StartDate:["",Validators.required],
      EndDate:["",Validators.required],
      Reason:["",Validators.required]
      }
    );
  }
OnSubmit(){
  this.submitted=true;
  if(this.LeaveForm.invalid)
  return;
  else
  alert("Leave Requested Successfully");
}
get f(){
  return this.LeaveForm.controls;
}
}