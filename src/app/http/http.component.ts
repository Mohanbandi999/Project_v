import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpSer:HttpService) { }

  newdata:any;
  
  dataone:any;
 status:any;
 users=['ram','sita','radha','krishna'];

  contacts$=of (this.users);


  ngOnInit(): void {
     this.contacts$.subscribe((val)=>{
      this.dataone=val
      
     
     })



  
  // this.contacts$.subscribe((data: any)=>{setTimeout(() => {this.contacts$=data
    
  // }, 10000)});
  

  // new Observable(obs=>{

  //   obs.next("mohan");
  //   obs.next("mohan 2")
  //   obs.next("mohan 3")
  // }).subscribe(data=>{
  //   this.status=data
  // });
    
  

  
  }
  getPosts(){
    this.httpSer.getEmployee().subscribe(data=>this.newdata=data);
    console.log(this.newdata)
  }

  
}
