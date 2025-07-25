'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

// Componente interno que usa useSearchParams
function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return {
          title: 'Error de Configuración',
          message: 'Hay un problema con la configuración del servidor. Por favor, contacta al administrador.',
          icon: '⚙️'
        };
      case 'AccessDenied':
        return {
          title: 'Acceso Denegado',
          message: 'No tienes permisos para acceder a este recurso.',
          icon: '🚫'
        };
      case 'Verification':
        return {
          title: 'Error de Verificación',
          message: 'El enlace de verificación ha expirado o no es válido. Por favor, solicita uno nuevo.',
          icon: '⚠️'
        };
      case 'Default':
      default:
        return {
          title: 'Error de Autenticación',
          message: 'Ha ocurrido un error durante el proceso de autenticación. Por favor, inténtalo de nuevo.',
          icon: '❌'
        };
    }
  };

  const errorInfo = getErrorMessage(error);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header con gradiente de error */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <span className="text-2xl">{errorInfo.icon}</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">{errorInfo.title}</h1>
            <p className="text-red-100 text-sm">Algo salió mal durante el proceso de autenticación</p>
          </div>

          {/* Contenido */}
          <div className="px-8 py-8 space-y-6">
            {/* Mensaje de error */}
            <div className="text-center">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm leading-relaxed">
                  {errorInfo.message}
                </p>
              </div>
            </div>

            {/* Información adicional basada en el tipo de error */}
            {error === 'Verification' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-blue-800 font-medium text-sm mb-2">💡 Consejo:</h3>
                <p className="text-blue-700 text-xs leading-relaxed">
                  Los enlaces de verificación expiran después de 24 horas por motivos de seguridad.
                </p>
              </div>
            )}

            {error === 'AccessDenied' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-yellow-800 font-medium text-sm mb-2">ℹ️ Información:</h3>
                <p className="text-yellow-700 text-xs leading-relaxed">
                  Si crees que esto es un error, contacta al administrador del sistema.
                </p>
              </div>
            )}

            {/* Botones de acción */}
            <div className="space-y-3">
              <Link 
                href="/auth/signin" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>🔄</span>
                Intentar de nuevo
              </Link>
              
              <Link 
                href="/" 
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>🏠</span>
                Volver al inicio
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">
                ¿Necesitas ayuda? Contacta nuestro soporte
              </p>
              <div className="flex justify-center space-x-4 text-xs">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                  Soporte técnico
                </a>
                <span className="text-gray-300">•</span>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                  Documentación
                </a>
                <span className="text-gray-300">•</span>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Información de debug (solo en desarrollo) */}
        {process.env.NODE_ENV === 'development' && error && (
          <div className="mt-4 bg-gray-900 text-green-400 p-4 rounded-lg text-xs font-mono">
            <p className="mb-1">🔧 Debug Info:</p>
            <p>Error Code: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente principal con Suspense
export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
}
