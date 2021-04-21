import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesPorAsignarComponent } from './paquetes-por-asignar.component';

describe('PaquetesPorAsignarComponent', () => {
  let component: PaquetesPorAsignarComponent;
  let fixture: ComponentFixture<PaquetesPorAsignarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetesPorAsignarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetesPorAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
