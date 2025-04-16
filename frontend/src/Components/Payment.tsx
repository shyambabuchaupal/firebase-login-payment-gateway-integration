import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //  Import navigate

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); //  Hook for navigation

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!stripe || !elements) {
      setMessage("⚠️ Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setMessage("⚠️ Card Element not found.");
      setLoading(false);
      return;
    }

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setMessage(error.message || " Payment failed.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/payment", {
        paymentMethodId: paymentMethod.id,
      });

      if (res.data.success) {
        setMessage(" Payment successful!");

        //  Navigate to success page after 2 seconds
        setTimeout(() => {
          navigate("/success");
        }, 2000);
      } else {
        setMessage(" Payment failed from server.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(` Server error: ${err.message}`);
      } else {
        setMessage(" An unexpected error occurred.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="p-3 border rounded mb-4">
            <CardElement />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            disabled={!stripe || loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-sm text-red-600">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Payment;
