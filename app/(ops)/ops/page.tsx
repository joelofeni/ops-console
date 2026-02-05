import { overview, activity } from "./dashboard-data";

export default function OpsDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        {overview.map((item) => (
          <div key={item.label} className="border border-border p-4">
            <div className="text-sm text-muted">{item.label}</div>
            <div className="text-2xl font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="border border-border p-4">
        <h2 className="mb-2 text-sm font-medium">Recent Activity</h2>
        <ul className="space-y-1 text-sm">
          {activity.map((a) => (
            <li key={a.id} className="flex justify-between">
              <span>{a.text}</span>
              <span className="text-muted">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
