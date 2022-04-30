import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasEditarCadastrarEditarComponent } from './contas-editar-cadastrar-editar.component';

describe('ContasEditarCadastrarEditarComponent', () => {
  let component: ContasEditarCadastrarEditarComponent;
  let fixture: ComponentFixture<ContasEditarCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasEditarCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasEditarCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
