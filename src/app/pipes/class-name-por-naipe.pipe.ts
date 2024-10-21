import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorNaipe',
  standalone: true
})
export class ClassNamePorNaipePipe implements PipeTransform {

  /**
   * Retorna `'vermelho'` ou `'preto'`, de acordo com o naipe especificado.
   *
   * @param naipe Naipe a ser verificado.
   */
  public transform(naipe: string): string {
    if (naipe == 'copas' || naipe == 'ouro') {
      return 'vermelho';
    } else {
      return 'preto';
    }
  }

}
