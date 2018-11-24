import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTextoComponent } from './formulario-texto.component';

describe('FormularioTextoComponent', () => {
  let component: FormularioTextoComponent;
  let fixture: ComponentFixture<FormularioTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
