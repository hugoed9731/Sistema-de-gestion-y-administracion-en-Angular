import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallefinalizadoComponent } from './detallefinalizado.component';

describe('DetallefinalizadoComponent', () => {
  let component: DetallefinalizadoComponent;
  let fixture: ComponentFixture<DetallefinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallefinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallefinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
