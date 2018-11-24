import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLancamentoComponent } from './formulario-lancamento.component';

describe('FormularioLancamentoComponent', () => {
  let component: FormularioLancamentoComponent;
  let fixture: ComponentFixture<FormularioLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
