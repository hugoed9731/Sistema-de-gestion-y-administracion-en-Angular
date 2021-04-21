import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecandidatoComponent } from './detallecandidato.component';

describe('DetallecandidatoComponent', () => {
  let component: DetallecandidatoComponent;
  let fixture: ComponentFixture<DetallecandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
