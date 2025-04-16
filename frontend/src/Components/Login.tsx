import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authing, setAuthing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signInWithEmail = async () => {
    setAuthing(true);
    setError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log("User:", response.user.uid);
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/payment");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        const errorCode = error.code;

        if (
          errorCode === "auth/invalid-credential" ||
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          setError("Invalid email or password. Please try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }

        setAuthing(false);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

        {success && (
          <div className="mb-4 text-green-600 text-sm">{success}</div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signInWithEmail}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          disabled={authing}
        >
          {authing ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
