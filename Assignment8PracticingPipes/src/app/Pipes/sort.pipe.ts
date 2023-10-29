import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], fieldName: string): any[] {
    return array.sort((a, b) => a[fieldName] < b[fieldName] ? -1 : (a[fieldName] > b[fieldName] ? 1 : 0));
  }

}
