import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  body=JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })

  constructor(public http : HttpClient) { }

  getEmployee():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');  //.pipe(map(res => res))
  }
  postemployee(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',this.body)
  }

}
