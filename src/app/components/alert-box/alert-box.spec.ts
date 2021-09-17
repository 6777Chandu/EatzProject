import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AlertBoxComponent } from './alert-box.component';

describe('AlertBoxComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AlertBoxComponent],
    }).compileComponents();
  });

  it(`Init alertOpen to be true `, () => {
    const fixture = TestBed.createComponent(AlertBoxComponent);
    const app = fixture.componentInstance;
    expect(app.alertOpen).toBe(true);
  });

  it(`Init alertOpen to be False when Closed `, () => {
    const fixture = TestBed.createComponent(AlertBoxComponent);
    const app = fixture.componentInstance;
    expect(app.onClose('name')).toBe(expect(app.alertOpen).toBe(false));
  });

  it(`Set Timing Delay to 500 when it is Orders`, () => {
    const fixture = TestBed.createComponent(AlertBoxComponent);
    const app = fixture.componentInstance;
    expect(app.onClose('orders')).toBe(expect(app.time).toBe(500));
  });

  it(`Set Timing Delay to 0 when it is Booking`, () => {
    const fixture = TestBed.createComponent(AlertBoxComponent);
    const app = fixture.componentInstance;
    expect(app.onClose('booking')).toBe(expect(app.time).toBe(0));
  });
});
