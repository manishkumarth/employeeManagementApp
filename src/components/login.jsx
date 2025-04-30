import { useState } from "react";

function Login({ checkLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    checkLogin(email, pass);
    setEmail('');
    setPass('');
  };

  return (
    <>
      {/* Heading */}
      <div className="absolute top-8 w-full text-center">
        <h1 className="text-3xl font-bold text-gray-700 font-mono">
          Employee Management App
        </h1>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
