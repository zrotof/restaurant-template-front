import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecommendationsComponent } from './home-recommendations.component';

describe('HomeRecommendationsComponent', () => {
  let component: HomeRecommendationsComponent;
  let fixture: ComponentFixture<HomeRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
