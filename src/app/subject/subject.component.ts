import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';

import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private http:HttpClient) { }
  newone:any;
  newtwo:any;

  ngOnInit(): void {

    //const observable= new Observable(obj=>obj.next(Math.random()))

    const observable =from(['sitaram','radhakrishna','narayana','vasudava'])

    //Sub 1

    //observable.subscribe(data=>this.newone=data);
    observable.subscribe(data=>console.log(data));

    //sub 2

   // observable.subscribe(data=>this.newtwo=data);
    observable.subscribe(data=>console.log(data));

    const subject=new Subject();

    //sub 1

    subject.subscribe(obj=>console.log("sub 1"+" "+obj));

    //sub 2
    subject.subscribe(obj=>console.log("sub 2"+" "+obj));


    subject.next(Math.random()); 

    const suboone= new Subject();

    const data =this.http.get('https://jsonplaceholder.typicode.com/users');

    suboone.subscribe((obj: any)=>console.log(obj));
    suboone.subscribe(obj=>console.log(obj));

   const datao= data.subscribe(suboone);


  }

}
