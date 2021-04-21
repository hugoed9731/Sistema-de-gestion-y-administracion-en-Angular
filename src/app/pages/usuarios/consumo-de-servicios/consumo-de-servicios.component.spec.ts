import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoDeServiciosComponent } from './consumo-de-servicios.component';

describe('ConsumoDeServiciosComponent', () => {
  let component: ConsumoDeServiciosComponent;
  let fixture: ComponentFixture<ConsumoDeServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoDeServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoDeServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
