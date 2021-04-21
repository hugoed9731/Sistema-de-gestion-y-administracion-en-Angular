import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPasComponent } from './detalles-pas.component';

describe('DetallesPasComponent', () => {
  let component: DetallesPasComponent;
  let fixture: ComponentFixture<DetallesPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
