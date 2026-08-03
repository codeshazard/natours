/* eslint-disable */

import { showAlert } from './alert.js';
import axios from 'axios';

// const stripe = Stripe();

// export const bookTour = async (tourId) => {
//   try {
//     // 1) get checkout session from API
//     const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

//     await stripe.redirectToCheckout({
//       sessionId: session.data.session.id,
//     });
//     //2) create checkout form + charge credit card
//   } catch (error) {
//     showAlert('error', error);
//   }
// };

export const bookTour = async (tourId) => {
  showAlert('error', 'Booking is not available yet.');
};
