import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosPComponent } from './candidatos-p.component';

describe('CandidatosPComponent', () => {
  let component: CandidatosPComponent;
  let fixture: ComponentFixture<CandidatosPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
