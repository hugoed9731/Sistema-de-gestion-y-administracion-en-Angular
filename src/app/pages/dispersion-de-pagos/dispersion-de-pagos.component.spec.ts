import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispersionDePagosComponent } from './dispersion-de-pagos.component';

describe('DispersionDePagosComponent', () => {
  let component: DispersionDePagosComponent;
  let fixture: ComponentFixture<DispersionDePagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispersionDePagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispersionDePagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
