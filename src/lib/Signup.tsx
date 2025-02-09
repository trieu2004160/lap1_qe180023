import { Input } from "@/components/ui/input";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export function Signup() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          SIGN UP
        </h2>
      </div>

      {/* Container chứa tất cả input */}
      <div className="w-full flex justify-center mt-6">
        <div className="w-1/4 flex flex-col items-center space-y-5">
          {/* Email Input với icon bên trong */}
          <div className="w-full relative">
            <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="text-xs text-left w-full  pl-10 "
            />
          </div>

          {/* Password Input */}
          <div className="w-full relative">
            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="password"
              placeholder="PASSWORD"
              className="text-xs text-left w-full border rounded-md pl-10 focus:ring-0"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="w-full relative">
            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="text-xs text-left w-full border rounded-md pl-10 focus:ring-0"
            />
          </div>

          {/* Button REGISTER */}
          <button
            type="submit"
            className="w-full rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2"
          >
            REGISTER
          </button>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="mt-10 text-center text-sm text-gray-500">
          <a
            href="#"
            className="font-semibold text-gray-900 hover:text-sky-400"
          >
            Already have an account? Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
