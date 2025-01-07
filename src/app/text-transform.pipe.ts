import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
  standalone: true
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string, length:number): string {
    // return value.trim().toUpperCase();
    if (!value) return ''; // Handle empty or null values
    return value.length > length ? value.substring(0, length) + '...' : value;

  }

}
