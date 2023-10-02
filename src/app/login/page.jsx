"use client";
import styles from '@/styles/login.module.scss'

import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();

    if (success) {
      const nextUrl = searchParams.get("next");   
      router.push(nextUrl ?? "/");
      router.refresh();
    } else {   
      alert("Login failed");
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.auth}>
      <h1>Kullanıcı Girişi</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
    </div>
    </div>
  );
}
