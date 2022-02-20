import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 Dateconfiger:Partial<BsDatepickerConfig>;

  public fullname:any;
  public email:any;
  public phonenumber:any;
  public gender:any;
  public checkbox:any;
  public date:any;


  constructor() { 
    this.Dateconfiger=Object.assign({},{containerClass:'theme-dark-blue'});
  }

  ngOnInit(): void {
  }
  save(Employeform:NgForm){
    console.log(Employeform.value);
  }
}
