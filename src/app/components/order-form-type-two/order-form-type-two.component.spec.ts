import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormTypeTwoComponent } from './order-form-type-two.component';

describe('OrderFormTypeTwoComponent', () => {
  let component: OrderFormTypeTwoComponent;
  let fixture: ComponentFixture<OrderFormTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormTypeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
