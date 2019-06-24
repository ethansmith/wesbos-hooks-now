import { Elements, StripeProvider } from "react-stripe-elements-universal"
import CheckoutForm from "../components/CheckoutForm"
import Head from "next/head"

const CheckoutPage = props => (
  <>
    <div>This is where I'm going to put the Stripe checkout.</div>
    <Head>
      <script src="https://js.stripe.com/v3/" async />
    </Head>

    <StripeProvider apiKey="pk_test_s5G4igMtK9KvmQtbRd0L18yR00ALa4imnQ">
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  </>
)

export default CheckoutPage
