import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatMakesDifferenceComponent } from './home-what-makes-difference.component';

describe('WhatMakesDifferenceComponent', () => {
  let component: HomeWhatMakesDifferenceComponent;
  let fixture: ComponentFixture<HomeWhatMakesDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhatMakesDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhatMakesDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
