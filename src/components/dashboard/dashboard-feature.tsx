import { AppHero } from '../ui/ui-layout'
import { VitalStats } from './vital-stats'
import { HealthMetrics } from './health-metrics'
import { VetCareBot } from './vet-care-bot'
import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'

const healthResources: { label: string; href: string }[] = [
  { label: 'VA Mental Health Services', href: 'https://www.va.gov/health-care/health-needs-conditions/mental-health/' },
  { label: 'Veterans Crisis Line', href: 'https://www.veteranscrisisline.net/' },
  { label: 'VA Health Care Benefits', href: 'https://www.va.gov/health-care/' },
  { label: 'Find VA Locations', href: 'https://www.va.gov/find-locations/' },
  { label: 'Veterans Community Care', href: 'https://www.va.gov/COMMUNITYCARE/index.asp' },
]

const upcomingAppointments = [
  { date: '2024-03-20', time: '10:00 AM', type: 'Physical Therapy', provider: 'Dr. Smith' },
  { date: '2024-03-25', time: '2:30 PM', type: 'Mental Health Check-up', provider: 'Dr. Johnson' },
]

export default function DashboardFeature() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const { publicKey } = useWallet()

  return (
    <div>
      <AppHero 
        title={
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">Welcome Back</h1>
            {publicKey && (
              <p className="text-xl opacity-80">Veteran ID: {publicKey.toString().slice(0, 8)}...</p>
            )}
          </div>
        } 
        subtitle="Your Personal Health & Wellness Tracker" 
      />
      
      <div className="tabs tabs-boxed justify-center mb-6">
        <a 
          className={`tab ${activeTab === 'dashboard' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </a>
        <a 
          className={`tab ${activeTab === 'chat' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          VetCare Bot
        </a>
      </div>

      {activeTab === 'dashboard' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          {/* Quick Actions */}
          <div className="md:col-span-2 card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quick Actions</h2>
              <div className="flex flex-wrap gap-2">
                <button className="btn btn-primary">Schedule Appointment</button>
                <button className="btn btn-secondary">Request Medication Refill</button>
                <button className="btn btn-accent">Message Provider</button>
                <button className="btn btn-info">View Health Records</button>
              </div>
            </div>
          </div>

          <VitalStats />
          <HealthMetrics />
          
          {/* Upcoming Appointments */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Upcoming Appointments</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((apt, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-base-200 rounded-lg">
                    <div>
                      <p className="font-bold">{apt.type}</p>
                      <p className="text-sm opacity-70">with {apt.provider}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{apt.date}</p>
                      <p className="text-sm opacity-70">{apt.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Important Resources</h2>
              <div className="grid grid-cols-1 gap-2">
                {healthResources.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="btn btn-outline btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <VetCareBot />
      )}
    </div>
  )
}
