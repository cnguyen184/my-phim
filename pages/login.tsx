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

    if (res.ok) {
      setMessage("Login successful");
      router.push("/movie");
    } else {
      setMessage(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a0f14] 
      px-4 relative">

      {/* Overlay dạng noise */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* Card */}
      <div className="relative w-full max-w-md backdrop-blur-xl 
        bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
        p-8 space-y-7">

        {/* Branding */}
        <h1 className="text-center text-3xl font-bold tracking-wide text-white">
          <span className="text-[#F2B6C8]">MY-</span>PHIM
        </h1>

        <p className="text-center text-gray-300">
          Đăng nhập để tiếp tục trải nghiệm phim
        </p>

        {/* Message */}
        {message && (
          <p
            className={`text-center text-sm font-medium ${
              message.includes("successful") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-200 mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-white/30 rounded-lg 
              bg-white/5 text-white p-3 focus:ring-2 
              focus:ring-[#F2B6C8] outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-white/30 rounded-lg 
              bg-white/5 text-white p-3 focus:ring-2 
              focus:ring-[#F2B6C8] outline-none"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F2B6C8] hover:bg-[#e69eb1] 
            text-black py-3 rounded-lg font-semibold transition 
            shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-300">
          New user?{" "}
          <a href="/signup" className="text-[#F2B6C8] font-medium hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
