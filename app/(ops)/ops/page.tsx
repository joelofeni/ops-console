import { overview, activity } from "./dashboard-data";

export default function OpsDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-lg font-semibold h-14">Operations Overview</h1>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          Internal administrative summary.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {overview.map((item) => (
          <div
            key={item.label}
            className="border border-[var(--color-border)] rounded-md p-4"
          >
            <div className="text-sm text-[var(--color-text-muted)]">
              {item.label}
            </div>
            <div className="mt-1 text-2xl font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="border border-[var(--color-border)] rounded-md p-4">
        <h2 className="mb-3 text-sm font-medium">Recent Activity</h2>

        <ul className="space-y-2 text-sm">
          {activity.map((a) => (
            <li
              key={a.id}
              className="flex flex-col sm:flex-row sm:justify-between"
            >
              <span>{a.text}</span>
              <span className="text-[var(--color-text-muted)] sm:text-right">
                {a.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
