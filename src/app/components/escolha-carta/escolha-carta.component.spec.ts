import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaCartaComponent } from './escolha-carta.component';

describe('EscolhaCartaComponent', () => {
  let component: EscolhaCartaComponent;
  let fixture: ComponentFixture<EscolhaCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaCartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolhaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
