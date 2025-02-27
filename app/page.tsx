import { redirect } from "next/navigation";

/**
 * Home page component
 * Redirects to inbox or signin based on auth status
 */
export default async function Home() {
  const session = null;

  // Redirect authenticated users to inbox
  if (session) {
    redirect("/inbox");
  } else {
    // Redirect unauthenticated users to signin
    redirect("/auth/login");
  }
}
