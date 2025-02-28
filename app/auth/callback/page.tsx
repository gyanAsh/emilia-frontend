"use client";
import { fetchToken } from "@/lib/apis/auth";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Callback() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  // In your auth/callback page
  useEffect(() => {
    if (code) {
      fetchToken(code)
        .then((res) => {
          console.log({ res });
          // Store and use token
          // ...
        })
        .catch((e) => console.error(e));
    } else redirect("/");
  }, [code]);

  return <div>Verifing User Credentials</div>;
}
