export function HealthMetrics() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Mental Health Check</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Stress Level</span>
            <progress className="progress progress-warning w-56" value="60" max="100"></progress>
          </div>
          <div className="flex justify-between items-center">
            <span>Mood</span>
            <progress className="progress progress-info w-56" value="75" max="100"></progress>
          </div>
          <div className="flex justify-between items-center">
            <span>Anxiety</span>
            <progress className="progress progress-error w-56" value="45" max="100"></progress>
          </div>
          <div className="flex justify-between items-center">
            <span>Well-being</span>
            <progress className="progress progress-success w-56" value="80" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  )
} 