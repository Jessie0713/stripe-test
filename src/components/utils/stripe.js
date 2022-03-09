/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe, Stripe } from '@stripe/stripe-js'
require('dotenv').config()

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export default getStripe
