export default function LoginPage() {
  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="hidden lg:block w-1/2 h-screen">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-24 md:p-16 sm:p-10 p-8 w-full lg:w-1/2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h1>
        <form action="#" method="POST" className="space-y-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-700">
              Remember Me
            </label>
          </div>
          {/* Forgot Password Link */}
          <div className="text-blue-600 hover:underline text-sm text-right">
            <a href="#">Forgot Password?</a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
        {/* Sign up Link */}
        <div className="mt-6 text-center text-gray-700">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
}
