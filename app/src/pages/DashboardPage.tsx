function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <section className="dashboard-header">
        <div>
          <p className="eyebrow">Mission Control</p>
          <h1>Orbital Operations Dashboard</h1>
          <p className="description">
            Real-time overview of active spacecraft, mission health, and operational alerts.
          </p>
        </div>

        <div className="operator-badge">
          Operator: Z. Sanchez
        </div>
      </section>

      <section className="metrics-grid">
        <article className="metric-card">
          <span>Active Missions</span>
          <strong>4</strong>
          <p>2 high-priority operations</p>
        </article>

        <article className="metric-card">
          <span>Spacecraft Online</span>
          <strong>12</strong>
          <p>All primary systems responding</p>
        </article>

        <article className="metric-card alert">
          <span>Critical Alerts</span>
          <strong>1</strong>
          <p>Telemetry drift detected</p>
        </article>

        <article className="metric-card">
          <span>Average Fleet Health</span>
          <strong>96%</strong>
          <p>Nominal operating range</p>
        </article>
      </section>
    </main>
  )
}

export default DashboardPage