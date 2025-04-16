import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-lg mb-4">Thank you for your payment.</p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Success;
