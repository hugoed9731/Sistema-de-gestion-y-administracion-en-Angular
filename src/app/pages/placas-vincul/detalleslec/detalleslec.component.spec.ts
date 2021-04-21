import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleslecComponent } from './detalleslec.component';

describe('DetalleslecComponent', () => {
  let component: DetalleslecComponent;
  let fixture: ComponentFixture<DetalleslecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleslecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleslecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
