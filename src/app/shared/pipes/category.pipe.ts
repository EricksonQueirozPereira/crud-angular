import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch(value){
      case 'Fron-end': return'code';
      case 'Back-end': return'computer';
      case 'FullStack': return'developer_mode';

    }
    return 'code';
  }
}
