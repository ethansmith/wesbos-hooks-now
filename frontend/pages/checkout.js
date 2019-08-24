import Head from 'next/head';
import { Elements, StripeProvider } from 'react-stripe-elements-universal';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = props => (
  <>
    <div>This is where I'm going to put the Stripe checkout.</div>
    <Head>
      <script src="https://js.stripe.com/v3/" async />
    </Head>

    <StripeProvider apiKey="pk_test_PkButKb8kGlsoCoMKm6UBcjY00fxG82fbX">
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  </>
);

export default CheckoutPage;
