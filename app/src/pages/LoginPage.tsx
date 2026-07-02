function LoginPage() {
  return (
    <main className="app-shell">
      <section className="login-card">
        <p className="eyebrow">Orbital Mission Control</p>

        <h1>Mission Operator Login</h1>

        <p className="description">
          Secure access portal for spacecraft operations, mission status, and telemetry monitoring.
        </p>

        <form className="login-form">
          <label>
            Username
            <input type="text" placeholder="operator@mission.local" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter secure password" />
          </label>

          <button type="submit">Access Mission Control</button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage