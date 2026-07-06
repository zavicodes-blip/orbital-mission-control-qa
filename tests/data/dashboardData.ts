export const dashboardMetrics = [
  {
    label: 'Active Missions',
    value: '4',
  },
  {
    label: 'Spacecraft Online',
    value: '12',
  },
  {
    label: 'Critical Alerts',
    value: '1',
  },
  {
    label: 'Average Fleet Health',
    value: '96%',
  },
];

export const expectedSpacecraftFleet = [
  {
    id: 'ARES-01',
    status: 'ONLINE',
    mission: 'Sentinel Watch',
    altitude: '405 km',
    velocity: '27,500 km/h',
    fuel: '81%',
    health: '98%',
  },
  {
    id: 'ARES-02',
    status: 'STANDBY',
    mission: 'Orbital Reserve',
    altitude: '0 km',
    velocity: '0 km/h',
    fuel: '94%',
    health: '100%',
  },
  {
    id: 'HELIOS-07',
    status: 'WARNING',
    mission: 'Telemetry Sweep',
    altitude: '389 km',
    velocity: '27,120 km/h',
    fuel: '62%',
    health: '88%',
  },
];

export const expectedMissionQueue = [
  {
    id: 'M-1042',
    name: 'Sentinel Watch',
    priority: 'HIGH',
    status: 'ACTIVE',
  },
  {
    id: 'M-1043',
    name: 'Orbital Reserve',
    priority: 'LOW',
    status: 'STANDBY',
  },
  {
    id: 'M-1044',
    name: 'Telemetry Sweep',
    priority: 'CRITICAL',
    status: 'ACTIVE',
  },
];

export const expectedOperationalAlerts = [
  {
    id: 'A-301',
    title: 'Telemetry drift detected',
    severity: 'CRITICAL',
    spacecraft: 'HELIOS-07',
  },
  {
    id: 'A-302',
    title: 'Fuel threshold approaching',
    severity: 'MEDIUM',
    spacecraft: 'ARES-01',
  },
];