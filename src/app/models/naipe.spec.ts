import { Naipe } from './naipe';

describe('Naipe', () => {

  let naipe: Naipe;

  beforeEach(() => {
    naipe = new Naipe(
      'espadas',
      '♠',
    );
  });

  it('should create an instance', () => {
    expect(naipe).toBeTruthy();
  });

  it('deveria conter "espadas" como nome', () => {
    expect(naipe.nome).toBeTruthy();
  });

});
