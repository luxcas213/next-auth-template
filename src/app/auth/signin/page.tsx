import SigninButton from "@/components/signinGoogleButton";
import SigninMagicLinkForm from "@/components/signinMagicLinkForm";
import { authOptions } from "@/lib/auth"; 
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/"); 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <span className="text-2xl">🔐</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Bienvenido</h1>
            <p className="text-indigo-100 text-sm">Accede a tu cuenta de forma segura</p>
          </div>

          {/* Contenido */}
          <div className="px-8 py-8 space-y-6">
            {/* Google Sign In */}
            <div>
              <SigninButton />
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">o continúa con email</span>
              </div>
            </div>

            {/* Magic Link Form */}
            <div>
              <SigninMagicLinkForm />
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              Al continuar, aceptas nuestros{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                Términos de Servicio
              </a>{" "}
              y{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                Política de Privacidad
              </a>
            </p>
          </div>
        </div>

        {/* Info adicional */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ¿Nuevo aquí?{" "}
            <span className="text-indigo-600 font-medium">
              Crear una cuenta es automático al iniciar sesión
            </span>
          </p>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}
