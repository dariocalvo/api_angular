import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CebeceraComponent } from './cebecera.component';

describe('CebeceraComponent', () => {
  let component: CebeceraComponent;
  let fixture: ComponentFixture<CebeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CebeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CebeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
