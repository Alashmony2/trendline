"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function WelcomeContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-100 to-blue-200 rounded-2xl">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-11/12 sm:w-1/2 lg:w-1/3">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome, <span className="text-cyan-600">{name || "User"}</span> 🎉
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          We're glad to have you here. Ready to explore your Website?
        </p>
        <button
          onClick={() => router.push("/ProductDetails")}
          className="btn btn-info w-full text-lg font-semibold rounded-xl shadow-md hover:scale-105 transition-all"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
