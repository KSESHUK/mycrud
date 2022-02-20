import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees:any=[];

  constructor(private my:EmployeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
    this.employees=this.my.getEmployee();
  }

  }
