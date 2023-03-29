import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
 newvalue:number=0;
  transform(value: number): Number {

    this.newvalue=Number(value)+1000;
    return this.newvalue;
  }

}
