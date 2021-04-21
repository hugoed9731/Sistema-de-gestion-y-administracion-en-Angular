import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseofinalizadoComponent } from './paseofinalizado.component';

describe('PaseofinalizadoComponent', () => {
  let component: PaseofinalizadoComponent;
  let fixture: ComponentFixture<PaseofinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaseofinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseofinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
