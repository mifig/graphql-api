"use client";

import React from 'react';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';
import useLogin from '@/hooks/use_login';

function Login() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const router = useRouter();

  const [loginUser, {data, loading, error}] = useLogin(email, password)

  function handleLogin(event) {
    event.preventDefault()
    loginUser()
    setEmail("")
    setPassword("")
  }

  React.useEffect(() => {
    if (data?.sessionCreate?.token) {
      router.push("/blogs")
    }
  }, [data])

  return (
    <div>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles["form-input-wrapper"]}>
          <label name="email">Email*</label>
          <input className={styles["form-input"]} type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        </div>

        <div className={styles["form-input-wrapper"]}>
          <label name="password">Password*</label>
          <input className={styles["form-input"]} type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
        </div>
        <button className={styles["form-button"]} type="submit">Login</button>
      </form>

      {loading ?
        <p>Submitting...</p>
        :
        ""
      }

      {error ? 
        (
          error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))
        )
        :
        <>
          <h1>{data?.sessionCreate?.user?.email}</h1>
          <p>{data?.sessionCreate?.token}</p>
          <p>{data?.sessionCreate?.id}</p>
        </>
      }
    </div>
  );
}

export default Login;
