import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopaseadorComponent } from './nuevopaseador.component';

describe('NuevopaseadorComponent', () => {
  let component: NuevopaseadorComponent;
  let fixture: ComponentFixture<NuevopaseadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevopaseadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevopaseadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
