import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseoactivoComponent } from './paseoactivo.component';

describe('PaseoactivoComponent', () => {
  let component: PaseoactivoComponent;
  let fixture: ComponentFixture<PaseoactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaseoactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseoactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
