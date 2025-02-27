"use client";

import Link from "next/link";

let signin_options = [
  { client_name: "Google", path: "/api/auth/login/google" },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
      {signin_options.map((client) => (
        <Link key={client.client_name} href={client.path} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Sign in with {client.client_name}
        </Link>
      ))}
    </div>
  );
}
