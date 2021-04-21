import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetPaseadComponent } from './det-pasead.component';

describe('DetPaseadComponent', () => {
  let component: DetPaseadComponent;
  let fixture: ComponentFixture<DetPaseadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetPaseadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetPaseadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
