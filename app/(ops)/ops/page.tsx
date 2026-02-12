import Link from "next/link";
import { records } from "./records/mock-data";

export default function OpsDashboard() {
  const recordsRequiringAction = records.filter(
    (r) =>
      r.status === "flagged" || r.status === "error" || r.status === "pending",
  );

  const topFive = recordsRequiringAction.slice(0, 5);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">Overview</h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Operational status snapshot.
        </p>
      </div>

      {/* Requires Action */}
      <div className="border border-[var(--color-border)] rounded-md p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium">Requires Action</h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Records pending review or intervention.
            </p>
          </div>

          <div className="text-sm font-semibold">
            {recordsRequiringAction.length}
          </div>
        </div>

        <div className="divide-y divide-[var(--color-border)]">
          {topFive.map((r) => (
            <div key={r.id} className="flex items-center justify-between py-3">
              <div className="space-y-1">
                <Link
                  href={`/ops/records/${r.id}`}
                  className="text-sm font-medium hover:underline"
                >
                  {r.name}
                </Link>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {r.owner}
                </div>
              </div>

              <span
                className={`badge ${
                  r.status === "active"
                    ? "badge--active"
                    : r.status === "inactive"
                      ? "badge--inactive"
                      : r.status === "pending"
                        ? "badge--pending"
                        : r.status === "flagged"
                          ? "badge--flagged"
                          : "badge--error"
                }`}
              >
                {r.status}
              </span>
            </div>
          ))}

          {topFive.length === 0 && (
            <div className="py-4 text-sm text-[var(--color-text-muted)]">
              No items require action.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
