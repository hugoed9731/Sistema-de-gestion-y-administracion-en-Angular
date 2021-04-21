import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepaseadorgComponent } from './detallepaseadorg.component';

describe('DetallepaseadorgComponent', () => {
  let component: DetallepaseadorgComponent;
  let fixture: ComponentFixture<DetallepaseadorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepaseadorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepaseadorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
