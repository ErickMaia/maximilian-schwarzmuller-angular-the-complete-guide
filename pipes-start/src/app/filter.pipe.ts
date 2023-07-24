import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', 
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length == 0){
      return value; 
    }

    let filteredValue = value.filter(x => x.status.includes(filterString))

    return filteredValue
  }

}
