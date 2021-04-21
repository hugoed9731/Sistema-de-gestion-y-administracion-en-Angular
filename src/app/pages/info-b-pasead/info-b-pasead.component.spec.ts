import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBPaseadComponent } from './info-b-pasead.component';

describe('InfoBPaseadComponent', () => {
  let component: InfoBPaseadComponent;
  let fixture: ComponentFixture<InfoBPaseadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBPaseadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBPaseadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
