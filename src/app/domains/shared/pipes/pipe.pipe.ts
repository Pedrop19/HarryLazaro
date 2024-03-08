import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: true
})
export class PipePipe implements PipeTransform {

  //? Crear pipe que ponga en mayuscula los caracteres impares de un string
  transform(value: string): string {
    return value.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join('');
  }

}
