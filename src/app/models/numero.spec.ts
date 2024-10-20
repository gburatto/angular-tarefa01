import { Numero } from './numero';

describe('Numero', () => {

  let numero: Numero;

  beforeEach(() => {
    numero = new Numero(
      '2',
    );
  });

  it('should create an instance', () => {
    expect(numero).toBeTruthy();
  });

  it('deveria conter "2" como nome', () => {
    expect(numero.nome).toBeTruthy();
  });

});
