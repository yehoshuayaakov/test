import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLensesComponent } from './choose-lenses.component';

describe('ChooseLensesComponent', () => {
  let component: ChooseLensesComponent;
  let fixture: ComponentFixture<ChooseLensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseLensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
