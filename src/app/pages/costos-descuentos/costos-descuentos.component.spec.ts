import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosDescuentosComponent } from './costos-descuentos.component';

describe('CostosDescuentosComponent', () => {
  let component: CostosDescuentosComponent;
  let fixture: ComponentFixture<CostosDescuentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosDescuentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostosDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
