import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPagoPasComponent } from './orden-pago-pas.component';

describe('OrdenPagoPasComponent', () => {
  let component: OrdenPagoPasComponent;
  let fixture: ComponentFixture<OrdenPagoPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenPagoPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenPagoPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
