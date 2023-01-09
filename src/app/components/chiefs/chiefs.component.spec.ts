import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefsComponent } from './chiefs.component';

describe('ChiefsComponent', () => {
  let component: ChiefsComponent;
  let fixture: ComponentFixture<ChiefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
