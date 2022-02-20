import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  constructor() { }

  getEmployee(){
    return[{
      id:1,name:'mark',gender:'male',Contactpef:'email',email:'1234567@gmail.com',
      dateOfbirth:new Date('31/10/1998'),role:'programmer Analyst',isActive:'true',
      imgpath:"/",phno:''},
      {
      id:2,name:'Rabbit',gender:'female',Contactpef:'email',email:'4567ss@gmail.com',
      dateOfbirth:new Date('26/12/1998'),role:'software dev',isActive:'true',
      imgpath:"/",phno:''
    },
     {
      id:3,name:'Parrot',gender:'female',Contactpef:'phno',email:'1234567@gmail.com',
      dateOfbirth:new Date('31/10/1998'),role:'fashion designer',isActive:'true',
      imgpath:"/",phno:''
     }
  ]
}
  
    
  
}



