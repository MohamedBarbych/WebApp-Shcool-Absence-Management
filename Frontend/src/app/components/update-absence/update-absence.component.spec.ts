import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAbsenceComponent } from './update-absence.component';

describe('UpdateAbsenceComponent', () => {
  let component: UpdateAbsenceComponent;
  let fixture: ComponentFixture<UpdateAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAbsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
