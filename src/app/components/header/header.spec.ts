import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent in Login Mode', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  it(`should have showCart to FALSE at start`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.showCart).toEqual(false);
  });

  it(`should have CartItems to empty at start`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.CartItems).toEqual([]);
  });

  // it(`should LogOut at click of LogOut button`, () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.onLogOut()).toBe(expect(app.isLoginMode).toEqual(false));
  // });

  //toEqual
  // can check how times a fn is called
  // validations errors in form can be tested

  
});
