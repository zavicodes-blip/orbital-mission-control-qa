import ares01 from '../assets/spacecraft/ares-01.png'
import ares02 from '../assets/spacecraft/ares-02.png'
import helios07 from '../assets/spacecraft/helios-07.png'

export const fleetMetrics = {
  activeMissions: 4,
  spacecraftOnline: 12,
  criticalAlerts: 1,
  averageFleetHealth: 96,
}

export const spacecraftFleet = [
  {
    id: 'ARES-01',
    image: ares01,
    status: 'ONLINE',
    mission: 'Sentinel Watch',
    altitude: '405 km',
    velocity: '27,500 km/h',
    fuel: '81%',
    health: '98%',
  },
  {
    id: 'ARES-02',
    image: ares02,
    status: 'STANDBY',
    mission: 'Orbital Reserve',
    altitude: '0 km',
    velocity: '0 km/h',
    fuel: '94%',
    health: '100%',
  },
  {
    id: 'HELIOS-07',
    image: helios07,
    status: 'WARNING',
    mission: 'Telemetry Sweep',
    altitude: '389 km',
    velocity: '27,120 km/h',
    fuel: '62%',
    health: '88%',
  },
]

export const missionQueue = [
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
]

export const alerts = [
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
]