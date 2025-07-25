
"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"

export default function SigninButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 group"
    >
      <FcGoogle size={24} className="group-hover:scale-110 transition-transform duration-200" />
      <span className="text-base">Continuar con Google</span>
    </button>
  )
}
