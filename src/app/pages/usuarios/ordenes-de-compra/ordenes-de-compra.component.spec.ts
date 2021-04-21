import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesDeCompraComponent } from './ordenes-de-compra.component';

describe('OrdenesDeCompraComponent', () => {
  let component: OrdenesDeCompraComponent;
  let fixture: ComponentFixture<OrdenesDeCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesDeCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
