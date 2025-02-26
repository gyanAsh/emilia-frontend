import { handleResponse } from "@/lib/utils";

export async function fetchToken(code: string) {
  const response = await fetch("/api/auth/exchange-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: code,
  });
  return handleResponse(response);
}
