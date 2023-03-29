import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})


export class PipesComponent implements OnInit {

  constructor(private https:HttpService) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','phone'];
  dataone:any;
  datatwo:any;
  

  ngOnInit(): void {
      this.https.getEmployee().subscribe(res=>{ 
      this.dataone = res;
      
    });
    
  }
  postemp(){
    this.https.postemployee().subscribe(api=>{this.datatwo=api,console.log(this.datatwo)});
  }

  


}
