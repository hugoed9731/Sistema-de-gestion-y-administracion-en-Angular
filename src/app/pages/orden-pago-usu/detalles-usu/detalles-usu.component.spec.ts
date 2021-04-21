import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUsuComponent } from './detalles-usu.component';

describe('DetallesUsuComponent', () => {
  let component: DetallesUsuComponent;
  let fixture: ComponentFixture<DetallesUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
