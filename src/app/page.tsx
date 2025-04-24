'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>| VENTLY |</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/registered-events">Registered Events</Link>
          <Link href="/browse">Browse</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <h1 className={styles.title}>Log In</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={styles.input}
                required
              />
              <Link href="/forgot-password" className={styles.forgotPassword}>
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
          <p className={styles.signupText}>
            Don't have an account?{' '}
            <Link href="/signup" className={styles.signupLink}>
              Signup
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
} 