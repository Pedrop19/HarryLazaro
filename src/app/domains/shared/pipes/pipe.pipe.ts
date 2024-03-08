import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: true
})
export class PipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
