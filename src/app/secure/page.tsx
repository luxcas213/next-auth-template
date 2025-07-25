"use client"

import { useSession, signOut } from "next-auth/react"

export default function Page() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Secure Page</h1>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Session Information:</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800">
          <strong>Status:</strong> {status}
        </p>
        <p className="text-blue-800">
          <strong>Email:</strong> {session?.user?.email || 'No email'}
        </p>
        <p className="text-blue-800">
          <strong>User ID:</strong> {session?.user?.id || 'No ID'}
        </p>
      </div>

      <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Sign Out
        </button>
    </div>
  );
}
