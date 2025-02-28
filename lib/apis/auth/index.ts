import { handleResponse } from "@/lib/utils";

export async function fetchToken(code: string) {
  const url = new URL(
    "http://localhost:3000/api/auth/login/google/exchange-code"
  );
  url.searchParams.set("code", code);
  const response = await fetch(url.href, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return handleResponse(response);
}
