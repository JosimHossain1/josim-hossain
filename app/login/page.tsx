"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase";
import { useState } from "react";

export default function Page() {
  const [user, setUser] = useState([]);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user: any = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center py-28">
      <div className=" border p-5 rounded shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Login</h1>

        <form className="max-w-md w-full">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md mb-4 px-2 py-1 md:p-2 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md mb-4 px-2 py-1 md:p-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 px-2 py-1 md:p-2 rounded-md w-full mb-4"
          >
            Sign In
          </button>
          <div>
            <button
              onClick={() => handleClick()}
              type="button"
              className=" border px-2 py-1 md:p-2 rounded-md w-full mb-2 flex justify-center items-center space-x-3"
            >
              <FcGoogle /> <span>Continue with Google</span>
            </button>

            <div className="flex justify-between items-center text-sm my-5">
              <div className="flex">
                <p className="underline">Dont have an account? </p>
                <Link
                  href="/register"
                  className="inline ml-3 font-bold text-green-500"
                >
                  Resgister
                </Link>
              </div>
              <div>
                <Link href="/forgot" className="underline">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
