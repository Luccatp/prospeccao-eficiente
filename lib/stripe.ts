import Stripe from 'stripe';

let stripePromise: Stripe;
const getStripe = () => {
  stripePromise = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
  });
  return stripePromise;
};

export default getStripe;