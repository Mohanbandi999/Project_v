import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'project-vv';

 constructor(private http:HttpClient,private router: Router){}

 
  ngOnInit():void{
  
  }

  loginIt(){
   this.router.navigate(['./http']);
  }
  subjectFun(){
    this.router.navigate(['./subject']);
  }
  pipesFun(){
    this.router.navigate(['./pipes']);
  }
}
