import { Component } from '@angular/core';
import { Naipe } from '../../models/naipe';
import { Numero } from '../../models/numero';

@Component({
  selector: 'app-escolha-carta',
  standalone: true,
  imports: [],
  templateUrl: './escolha-carta.component.html',
  styleUrl: './escolha-carta.component.css'
})
export class EscolhaCartaComponent {

  public naipes: Naipe[] = [
    new Naipe('ouro', '♦',),
    new Naipe('espadas', '♠',),
    new Naipe('copas', '♥',),
    new Naipe('paus', '♣',),
  ]

  public numeros: Numero[] = [
    new Numero('A',),
    new Numero('2',),
    new Numero('3',),
    new Numero('4',),
    new Numero('5',),
    new Numero('6',),
    new Numero('7',),
    new Numero('8',),
    new Numero('9',),
    new Numero('10',),
    new Numero('J',),
    new Numero('Q',),
    new Numero('K',),
  ]

  public naipe?: Naipe;
  public numero?: Numero;

}
