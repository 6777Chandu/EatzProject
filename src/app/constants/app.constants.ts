export class AppConstants {
  public static CONSTANTS = {
  
    PAGES: {
      HOME_PAGE: {
        HERO_IMG_PATH: 'assets/images/LoginImage.png',
        PAGE_COMPONENTS_TITLE: {
          ADVANCE_BOOKING: 'advanced booking',
          ADVANCE_BOOKING_ERROR: 'Please enter Restaurant Name',
          ADVANCE_BOOKING_TIMING: [
            '9 AM to 11 AM',
            '12 PM to 2 PM',
            '3 PM to 5 PM',
            '7 PM to 9 PM',
            'No Slots',
          ],
          ADVANCE_BOOKING_GUESTS: ['1', '2', '3', '4+'],
          ADVANCE_BOOKING_OPTIONS: {
            LOCALE: 'en-US',
          },
        },

        API: {
          LOCATION_API: 'https://geolocation-db.com/json/',
        },
      },

      OFFER_PAGE: {
        PAGE_TITLE: 'Offers',
        OFFERS_API:
          'https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366',
      },
      RESTAURANTS_PAGE: {
        PAGE_TITLE: 'Restaurants',
        RESTAURANTS_API:
          'https://run.mocky.io/v3/59b84146-7de3-4794-8534-8979236ec0bc',
      },
      ORDERS_PAGE: {
        PAGE_TITLE: 'Your Orders',
        VIRTUAL_SCROLL_HEIGHT: 265,
        ORDERS_API:
          'https://run.mocky.io/v3/69cd6951-b66d-483f-bece-278ac4fd91a6',
      },
      LOGIN_PAGE: {
        PAGE_TITLE: 'Login into Eatz',
        FORM_VALIDATIONS:{
          ERROR_MSG: 'Wrong Username/Password',
          USERNAME_MSG: 'Please enter Username',
          PASSWORD_MSG: 'Please enter Password',
          BUTTON_NAME: 'Login'
        }
      },
    },
  };
}
