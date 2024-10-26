import { ClassNamePorNaipePipe } from './class-name-por-naipe.pipe';

describe('ClassNamePorNaipePipe', () => {

  let pipe: ClassNamePorNaipePipe;

  beforeEach(() => {
    pipe = new ClassNamePorNaipePipe();
  });

  it('create an instance', () => {
    const pipe = new ClassNamePorNaipePipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('deve retornar "vermelho" para naipe "copas"', () => {
      expect(pipe.transform('copas')).toBe('vermelho');
    });

    it('deve retornar "vermelho" para naipe "ouro"', () => {
      expect(pipe.transform('ouro')).toBe('vermelho');
    });

    it('deve retornar "preto" para naipe "espadas"', () => {
      expect(pipe.transform('espadas')).toBe('preto');
    });

    it('deve retornar "preto" para naipe "paus"', () => {
      expect(pipe.transform('paus')).toBe('preto');
    });

  });

});
