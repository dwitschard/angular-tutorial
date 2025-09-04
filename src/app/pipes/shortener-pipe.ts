import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shortIt'
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string, maxCharacters: number): string {
    if (value?.length > maxCharacters) {
      return value.substring(0, maxCharacters) + '...';
    } else {
      return value ?? ''
    }
  }

}
