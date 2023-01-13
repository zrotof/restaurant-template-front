import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHoursComponent } from './home-hours.component';

describe('HomeHoursComponent', () => {
  let component: HomeHoursComponent;
  let fixture: ComponentFixture<HomeHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
