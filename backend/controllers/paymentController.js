const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Secret Key from .env

const createPaymentIntent = async (req, res) => {
  const { paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // Amount in cents
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.status(200).send({ success: true, paymentIntent });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = { createPaymentIntent };
