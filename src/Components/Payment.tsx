const Payment = () => {
  const handleFormSubmit = () => {
    console.log(">>> form submitted");
  };

  return (
    <div className="payment-container">
      <h2 className="text-2xl font-bold">Payment Page</h2>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="ENTER THE NAME" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Payment;
