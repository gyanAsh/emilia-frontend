"use client";

const signinOptions = [
  { clientName: "Google", path: "/api/auth/login/google" },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
      {signinOptions.map((client) => (
        <a
          key={client.clientName}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          href={client.path}
          rel="noopener noreferrer"
        >
          Sign in with {client.clientName}
        </a>
      ))}
    </div>
  );
}
