import Link from 'next/link';
import { ArrowRight, Shield, Zap, Star } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            NextAuth Template
          </div>
          <div className="flex gap-4">
            <Link 
              href="/auth/signin" 
              className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/secure" 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Secure Area
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Secure Authentication
            <span className="text-blue-600 block">Made Simple</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A modern Next.js template with NextAuth.js, Prisma, and Tailwind CSS. 
            Everything you need to build secure applications with beautiful UI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/auth/signin"
              className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/secure"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Secure by Default
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Built-in authentication with NextAuth.js, supporting multiple providers 
              and secure session management out of the box.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Lightning Fast
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Powered by Next.js 14 with App Router, optimized for performance 
              and developer experience with TypeScript support.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Modern Stack
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Prisma for database management, Tailwind CSS for styling, 
              and modern React patterns for maintainable code.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">Type Safe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">1min</div>
              <div className="text-slate-600">Setup Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-slate-600">Possibilities</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16 border-t border-slate-200">
        <div className="text-center text-slate-500">
          <p>Built with ❤️ using Next.js, NextAuth.js, Prisma & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
