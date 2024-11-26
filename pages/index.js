import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("Session Data:", session);
  console.log("Session Status:", status);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <button onClick={signIn}>Login</button>;
  }

  return (
    <div className={styles.container}>
      <h1>Hello {session?.user?.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}
