import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosDeUsuarioComponent } from './perros-de-usuario.component';

describe('PerrosDeUsuarioComponent', () => {
  let component: PerrosDeUsuarioComponent;
  let fixture: ComponentFixture<PerrosDeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerrosDeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
