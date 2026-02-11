import { overview, activity } from "./dashboard-data";

export default function OpsDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">Overview</h1>
        <p className="text-sm text-[hsl(var(--color-fg)/0.6)]">
          Operational summary
        </p>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {overview.map((item) => (
          <div
            key={item.label}
            className="border border-[hsl(var(--color-border))] rounded-md p-5"
          >
            <div className="text-sm text-[hsl(var(--color-fg)/0.6)]">
              {item.label}
            </div>

            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="border border-[hsl(var(--color-border))] rounded-md">
        <div className="px-5 py-4 border-b border-[hsl(var(--color-border))] text-sm font-medium">
          Recent Activity
        </div>

        <ul className="divide-y divide-[hsl(var(--color-border))] text-sm">
          {activity.map((a) => (
            <li key={a.id} className="flex justify-between px-5 py-3">
              <span>{a.text}</span>
              <span className="text-[hsl(var(--color-fg)/0.6)]">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
