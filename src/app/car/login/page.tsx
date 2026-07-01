"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/car-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const from = searchParams.get("from") || "/car";
        router.push(from);
      } else {
        setError("Wrong password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "320px",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        CD19-CAR mRNA Design
      </h1>
      <p style={{ fontSize: "0.85rem", color: "#888" }}>
        This section is password-protected.
      </p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
        required
        style={{
          padding: "0.6rem 0.8rem",
          background: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: "4px",
          color: "#ededed",
          fontSize: "0.9rem",
          fontFamily: "inherit",
          outline: "none",
        }}
      />

      {error && (
        <p style={{ color: "#f87171", fontSize: "0.85rem", margin: 0 }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "0.6rem",
          background: loading ? "#333" : "#ededed",
          color: "#0a0a0a",
          border: "none",
          borderRadius: "4px",
          fontSize: "0.9rem",
          fontFamily: "inherit",
          fontWeight: 600,
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "..." : "Enter"}
      </button>
    </form>
  );
}

export default function CarLogin() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#ededed",
        fontFamily: "var(--font-roboto-mono), monospace",
      }}
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
