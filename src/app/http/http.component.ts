import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpSer:HttpService) { }

  newdata:any;
  users:any;
  contacts$:any;
  dataone:any;
 status:any;
  ngOnInit(): void {
  this.users=['ram','sita','radha','krishna'];

  this.contacts$=of (this.users);
  this.contacts$.subscribe((data: any)=>this.dataone=data)
  

  new Observable(obs=>{

    obs.next("mohan");
    obs.next("mohan 2")
    obs.next("mohan 3")
  }).subscribe(data=>{
    this.status=data
  });
    
  

  
  }
  getPosts(){
    this.httpSer.getEmployee().subscribe(data=>this.newdata=data);
  }
}
