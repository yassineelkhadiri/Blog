import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorOverviewComponent } from './author-overview.component';

describe('AuthorOverviewComponent', () => {
  let component: AuthorOverviewComponent;
  let fixture: ComponentFixture<AuthorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
