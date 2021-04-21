import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPerrosComponent } from './consulta-perros.component';

describe('ConsultaPerrosComponent', () => {
  let component: ConsultaPerrosComponent;
  let fixture: ComponentFixture<ConsultaPerrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPerrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
