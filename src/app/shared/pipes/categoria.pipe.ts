import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'fron-end': return'code';
      case 'back-end': return'computer';


    }
    return 'code';
  }

}
