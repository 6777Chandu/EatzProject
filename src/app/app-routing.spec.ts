// import { Location } from '@angular/common';
// import { TestBed, fakeAsync, tick } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NavigationEnd, Router } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { AppComponent } from './app.component';
// import { routes } from './app-routing.module';
// import { filter } from 'rxjs/operators';
// import { RestaurentsComponent } from './components/restaurents/restaurents.component';

// describe('Router: App', () => {
//   let location: Location;
//   let router: Router;
//   let abc: Router;
//   let fixture;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(routes)],
//       declarations: [HomeComponent, RestaurentsComponent, AppComponent],
//     });

//     router = TestBed.inject(Router);
//     location = TestBed.inject(Location);

//     fixture = TestBed.createComponent(AppComponent);
//     router.initialNavigation();
//   });

  

//   it('navigate to "Home" redirects you to /home', () => {
//     router.navigate(['/home']).then(() => {
//         expect(location.path()).toBe('/home');
//     });
//     tick
//     // expect(location.path()).toBe('/home');
//   });

//   it('navigate to "Restaurents" redirects you to /restaurents', () => {
//     router.navigate(['restaurents']).then(() => {
//       expect(location.path()).toBe('/restaurents');
//     });
//   });
// });
