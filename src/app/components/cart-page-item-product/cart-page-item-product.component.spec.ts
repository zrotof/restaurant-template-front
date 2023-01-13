import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageItemProductComponent } from './cart-page-item-product.component';

describe('CartPageItemProductComponent', () => {
  let component: CartPageItemProductComponent;
  let fixture: ComponentFixture<CartPageItemProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPageItemProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
