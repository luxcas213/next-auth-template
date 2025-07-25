import Link from 'next/link';
export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to the Next.js App</h1>
      <Link href="/auth/signin" className="text-blue-500 hover:underline">
        Sign In
      </Link>
      <Link href="/secure" className="text-blue-500 hover:underline ml-4">
        Secure Page 
      </Link>
    </>
  );
}
