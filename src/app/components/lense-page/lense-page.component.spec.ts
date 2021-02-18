import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensePageComponent } from './lense-page.component';

describe('LensePageComponent', () => {
  let component: LensePageComponent;
  let fixture: ComponentFixture<LensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LensePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
