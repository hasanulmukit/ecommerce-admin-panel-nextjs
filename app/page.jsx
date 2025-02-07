// app/page.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect immediately to the admin dashboard
    router.replace("/admin/dashboard");
  }, [router]);

  return null; // or a loading spinner if you prefer
}
