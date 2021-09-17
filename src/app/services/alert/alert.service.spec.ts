import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';



describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('AlertBox Should not display at the start( showAlert to be false)', () => {
    expect(service.showAlert).toBeFalsy();
  });

  it('showAlert Should be TRUE when Opened', () => {
    expect(service.onOpenAlert()).toBe(expect(service.showAlert).toBe(true));
  });

  it('showAlert Should be FALSE when Closed', () => {
    expect(service.onCloseAlert()).toBe(expect(service.showAlert).toBe(false));
  });

  it('alertType should be empty initially', () => {
    expect(service.alertType).toBe('');
  });

  it('alertType should be booking when Booking is called', () => {
    expect(service.onBooking()).toBe(expect(service.alertType).toBe('booking'));
  });

  it('alertType should be orders when Orders is called', () => {
    expect(service.onOrders()).toBe(expect(service.alertType).toBe('orders'));
  });

  it('item should be empty initially', () => {
    expect(service.item).toEqual({});
  });

});
