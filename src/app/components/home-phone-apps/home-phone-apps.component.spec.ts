import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhoneAppsComponent } from './home-phone-apps.component';

describe('HomePhoneAppsComponent', () => {
  let component: HomePhoneAppsComponent;
  let fixture: ComponentFixture<HomePhoneAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePhoneAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhoneAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
