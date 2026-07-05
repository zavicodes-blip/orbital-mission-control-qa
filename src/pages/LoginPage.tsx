import { type FormEvent, useState } from 'react'
import { VALID_OPERATOR_CREDENTIALS } from '../data/auth'

interface LoginPageProps {
  onLogin: () => void
}

function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername && !trimmedPassword) {
      setErrorMessage('Username and password are required.')
      return
    }

    if (!trimmedUsername) {
      setErrorMessage('Username is required.')
      return
    }

    if (!trimmedPassword) {
      setErrorMessage('Password is required.')
      return
    }

    const isValidOperator =
      trimmedUsername === VALID_OPERATOR_CREDENTIALS.username &&
      trimmedPassword === VALID_OPERATOR_CREDENTIALS.password

    if (!isValidOperator) {
      setErrorMessage('Invalid username or password.')
      return
    }

    setErrorMessage('')
    onLogin()
  }

  return (
    <main className="app-shell">
      <section className="login-card">
        <p className="eyebrow">Orbital Mission Control</p>

        <h1>Mission Operator Login</h1>

        <p className="description">
          Secure access portal for spacecraft operations, mission status, and telemetry monitoring.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="operator@mission.local"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter secure password"
            />
          </label>

          {errorMessage && (
            <p role="alert" className="login-error">
              {errorMessage}
            </p>
          )}

          <button type="submit">Access Mission Control</button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage