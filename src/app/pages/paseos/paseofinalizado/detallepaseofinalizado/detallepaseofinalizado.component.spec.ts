import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepaseofinalizadoComponent } from './detallepaseofinalizado.component';

describe('DetallepaseofinalizadoComponent', () => {
  let component: DetallepaseofinalizadoComponent;
  let fixture: ComponentFixture<DetallepaseofinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepaseofinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepaseofinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
