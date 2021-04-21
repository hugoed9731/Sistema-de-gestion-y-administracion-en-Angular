import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasVinculComponent } from './placas-vincul.component';

describe('PlacasVinculComponent', () => {
  let component: PlacasVinculComponent;
  let fixture: ComponentFixture<PlacasVinculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacasVinculComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasVinculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
