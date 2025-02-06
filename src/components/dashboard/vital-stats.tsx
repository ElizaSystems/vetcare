export function VitalStats() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Vital Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="stat">
            <div className="stat-title">Blood Pressure</div>
            <div className="stat-value">120/80</div>
            <div className="stat-desc text-success">Normal</div>
          </div>
          <div className="stat">
            <div className="stat-title">Heart Rate</div>
            <div className="stat-value">72</div>
            <div className="stat-desc">bpm</div>
          </div>
          <div className="stat">
            <div className="stat-title">Weight</div>
            <div className="stat-value">175</div>
            <div className="stat-desc">lbs</div>
          </div>
          <div className="stat">
            <div className="stat-title">Sleep</div>
            <div className="stat-value">7.2</div>
            <div className="stat-desc">hours/night</div>
          </div>
        </div>
      </div>
    </div>
  )
} 