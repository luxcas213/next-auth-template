"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { MdEmail } from "react-icons/md"

export default function SigninMagicLinkForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/"
      })

      if (result?.error) {
        setError("Hubo un error al enviar el enlace. Inténtalo de nuevo.")
      } else {
        setIsSubmitted(true)
      }
    } catch {
      setError("Hubo un error inesperado. Inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <MdEmail className="text-green-600" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-green-800">
            ¡Enlace enviado!
          </h3>
        </div>
        <p className="text-green-700 mb-4 leading-relaxed">
          Hemos enviado un enlace de acceso a <strong className="font-semibold">{email}</strong>
        </p>
        <p className="text-sm text-green-600 mb-4">
          Revisa tu bandeja de entrada y haz clic en el enlace para ingresar.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setEmail("")
          }}
          className="text-sm text-green-600 hover:text-green-800 underline font-medium transition-colors"
        >
          Enviar a otro email
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
          Correo electrónico
        </label>
        <div className="relative">
          <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            disabled={isLoading}
            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-200 text-base placeholder-gray-400"
          />
        </div>
      </div>

      {error && (
        <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl">
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || !email}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <MdEmail size={20} />
            <span>Enviar enlace de acceso</span>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Te enviaremos un enlace seguro para ingresar sin contraseña
      </p>
    </form>
  )
}
