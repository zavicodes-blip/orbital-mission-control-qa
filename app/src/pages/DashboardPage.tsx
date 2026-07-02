import spaceBackground from '../assets/space-background.png'
import {
  alerts,
  fleetMetrics,
  missionQueue,
  spacecraftFleet,
} from '../data/missionData'

function DashboardPage() {
  return (
    <main
      className="dashboard-shell"
      style={{
        backgroundImage: `url(${spaceBackground})`,
      }}
    >
      <div className="dashboard-content">
        <header className="top-nav">
          <div>
            <p className="eyebrow">Orbital Mission Control</p>
            <h1>Operations Dashboard</h1>
          </div>

          <div className="status-strip">
            <span>Operator: Z. Sanchez</span>
            <span>Environment: QA Simulation</span>
            <span>System: Nominal</span>
          </div>
        </header>

        <section className="metrics-grid">
          <article className="metric-card">
            <span>Active Missions</span>
            <strong>{fleetMetrics.activeMissions}</strong>
            <p>2 high-priority operations</p>
          </article>

          <article className="metric-card">
            <span>Spacecraft Online</span>
            <strong>{fleetMetrics.spacecraftOnline}</strong>
            <p>All primary systems responding</p>
          </article>

          <article className="metric-card alert">
            <span>Critical Alerts</span>
            <strong>{fleetMetrics.criticalAlerts}</strong>
            <p>Telemetry drift detected</p>
          </article>

          <article className="metric-card">
            <span>Average Fleet Health</span>
            <strong>{fleetMetrics.averageFleetHealth}%</strong>
            <p>Nominal operating range</p>
          </article>
        </section>

        <section className="operations-grid">
          <div className="panel large-panel">
            <div className="panel-header">
              <h2>Fleet Status</h2>
              <span>Live Operations</span>
            </div>

            <div className="fleet-list">
              {spacecraftFleet.map((spacecraft) => (
                <article className="spacecraft-card" key={spacecraft.id}>
                  <div className="spacecraft-header">
                    <div className="spacecraft-info">
                      <img
                        src={spacecraft.image}
                        alt={spacecraft.id}
                        className="spacecraft-image"
                      />

                      <div>
                        <h3>{spacecraft.id}</h3>
                        <p>{spacecraft.mission}</p>
                      </div>
                    </div>

                    <span
                      className={`status-pill ${spacecraft.status.toLowerCase()}`}
                    >
                      {spacecraft.status}
                    </span>
                  </div>

                  <div className="telemetry-grid">
                    <span>Altitude: {spacecraft.altitude}</span>
                    <span>Velocity: {spacecraft.velocity}</span>
                    <span>Fuel: {spacecraft.fuel}</span>
                    <span>Health: {spacecraft.health}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Mission Queue</h2>
              <span>{missionQueue.length} Missions</span>
            </div>

            <div className="mission-list">
              {missionQueue.map((mission) => (
                <article className="mission-row" key={mission.id}>
                  <div>
                    <strong>{mission.name}</strong>
                    <p>{mission.id}</p>
                  </div>

                  <div className="mission-meta">
                    <span>{mission.priority}</span>
                    <span>{mission.status}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Operational Alerts</h2>
              <span>{alerts.length} Open</span>
            </div>

            <div className="alert-list">
              {alerts.map((alert) => (
                <article className="alert-row" key={alert.id}>
                  <strong>{alert.title}</strong>
                  <p>{alert.spacecraft}</p>
                  <span>{alert.severity}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DashboardPage