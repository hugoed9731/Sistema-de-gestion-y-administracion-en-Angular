import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosFComponent } from './candidatos-f.component';

describe('CandidatosFComponent', () => {
  let component: CandidatosFComponent;
  let fixture: ComponentFixture<CandidatosFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
