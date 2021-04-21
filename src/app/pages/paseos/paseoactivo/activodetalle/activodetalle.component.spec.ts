import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivodetalleComponent } from './activodetalle.component';

describe('ActivodetalleComponent', () => {
  let component: ActivodetalleComponent;
  let fixture: ComponentFixture<ActivodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
