import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapublicacionComponent } from './nuevapublicacion.component';

describe('NuevapublicacionComponent', () => {
  let component: NuevapublicacionComponent;
  let fixture: ComponentFixture<NuevapublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevapublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevapublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
