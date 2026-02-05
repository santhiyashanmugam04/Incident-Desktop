import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {
  onLogin: () => void;
};

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // later you will add API logic here

    onLogin(); // ✅ VERY IMPORTANT (sets isAuthenticated = true)
    navigate("/", { replace: true }); // ✅ go to Dashboard
  };

  return (
    <div className="min-h-screen w-full bg-[#0c1527] flex items-center justify-center relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[30%] right-[5%] w-72 h-72 bg-red-400 rounded-full opacity-70" />
      <div className="absolute bottom-[10%] left-[10%] w-36 h-36 bg-red-500 rounded-full opacity-50" />
      <div className="absolute top-[70%] left-[5%] w-20 h-20 border-2 border-red-400 rounded-full opacity-70" />
      <div className="absolute top-[15%] right-[15%] w-28 h-28 border-2 border-red-500 rounded-full opacity-70" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center z-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-red-400 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">NextOpz</h1>
          <p className="text-gray-300 max-w-md mb-10">
            With NextOpz, build once and deploy forever.
          </p>

          <p className="text-sm">
            Don’t have an account?{" "}
            <span className="text-white cursor-pointer">Get started</span>
          </p>

          <p className="mt-8 text-xs text-gray-400">
            Read our <span className="underline">terms</span> and{" "}
            <span className="underline">conditions</span>
          </p>
        </div>

        {/* Login Card */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[600px] h-[400px] max-w-md bg-white pl-6 pr-7 shadow-xl">
            <h2 className="text-2xl font-semibold text-center text-black mb-6 p-2">
              Log in
            </h2>

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm text-gray-500 mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full h-11 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm text-gray-500 mb-1 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-11 px-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleLogin}
                className="flex-1 h-9.5 bg-red-500 hover:bg-red-300 text-white rounded-md font-small transition"
              >
                LOG IN AS EMAIL USER
              </button>
              <button className="flex-1 h-9.5 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition">
                CREATE ACCOUNT
              </button>
            </div>

            {/* Divider */}
            <div className="relative text-center text-sm text-gray-400 mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <span className="relative px-2 bg-white">
                or log in with
              </span>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="h-10 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
                Google
              </button>
              <button className="h-10 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
