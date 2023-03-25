import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpSer:HttpService) { }

  newdata:any;

  ngOnInit(): void {
  }

  getPosts(){
    this.httpSer.getEmployee().subscribe(data=>this.newdata=data)
  }
}
