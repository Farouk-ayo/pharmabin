"use client";
import Navbar from "@/components/navbar/navbar";
import TopBar from "@/components/navbar/topBar";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <TopBar />
      <div className="top-24 relative flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center max-w-md md:max-w-full p-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Oops! <span className="text-primary">You are lost</span>
          </h1>
          <p className="text-black mb-8">
            Looks like the page you&apos;re looking for doesn&apos;t exist. But
            don&apos;t worry, we&apos;ve got plenty of other things for you to
            explore.
          </p>
          <div className="w-full max-w-xs mx-auto mb-8">
            {/* <img
              src="/404.svg"
              alt="404 Error Illustration"
              className="w-full h-auto"
            /> */}
          </div>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
