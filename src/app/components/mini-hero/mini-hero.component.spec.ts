import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeroComponent } from './mini-hero.component';

describe('MiniHeroComponent', () => {
  let component: MiniHeroComponent;
  let fixture: ComponentFixture<MiniHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
