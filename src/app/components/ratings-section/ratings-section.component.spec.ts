import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsSectionComponent } from './ratings-section.component';

describe('RatingsSectionComponent', () => {
  let component: RatingsSectionComponent;
  let fixture: ComponentFixture<RatingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
