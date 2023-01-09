import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormTypeOneComponent } from './order-form-type-one.component';

describe('OrderFormTypeOneComponent', () => {
  let component: OrderFormTypeOneComponent;
  let fixture: ComponentFixture<OrderFormTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormTypeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
