import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPagoUsuComponent } from './orden-pago-usu.component';

describe('OrdenPagoUsuComponent', () => {
  let component: OrdenPagoUsuComponent;
  let fixture: ComponentFixture<OrdenPagoUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenPagoUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenPagoUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
