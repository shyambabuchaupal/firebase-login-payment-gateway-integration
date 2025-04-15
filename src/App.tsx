import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to My App</h1>
        <p className="text-lg mb-8">Click below to login and get started</p>
        <button
          onClick={handleLoginClick}
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default App;
