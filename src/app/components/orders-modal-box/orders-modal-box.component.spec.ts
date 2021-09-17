import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersModalBoxComponent } from './orders-modal-box.component';

describe('OrdersModalBoxComponent', () => {
  let component: OrdersModalBoxComponent;
  let fixture: ComponentFixture<OrdersModalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersModalBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
