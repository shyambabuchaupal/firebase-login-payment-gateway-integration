import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const stripePromise = loadStripe(
  "pk_test_51REFOcBX53bN45CmJqyrVGpYhzTDXaF81pYXn2BTM08ysNJ9tgfeUeqz6Yjbyz6SI0slrDETsm9U42Y7pJfYTimr00K0YqEETC"
);

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default StripeWrapper;
