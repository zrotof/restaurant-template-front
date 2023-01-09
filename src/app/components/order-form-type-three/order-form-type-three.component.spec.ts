import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormTypeThreeComponent } from './order-form-type-three.component';

describe('OrderFormTypeThreeComponent', () => {
  let component: OrderFormTypeThreeComponent;
  let fixture: ComponentFixture<OrderFormTypeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormTypeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormTypeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
