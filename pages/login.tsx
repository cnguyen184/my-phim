import router from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
    router.push("/movie"); 
  } else {
    const data = await res.json();
    setError(data.message);
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Welcome Back
        </h1>

        {message && (
          <p
            className={`text-center text-sm ${
              message.includes("successful") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white focus:ring-2 focus:ring-[#F2B6C8] outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white focus:ring-2 focus:ring-[#F2B6C8] outline-none"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F2B6C8] hover:bg-[#e6a6ba] text-black py-3 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          New user?{" "}
          <a href="/signup" className="text-[#d98fa8] font-medium hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
function setError(message: any) {
  throw new Error("Function not implemented.");
}

