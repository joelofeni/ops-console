import Link from "next/link";
import { records } from "./mock-data";

export default function RecordsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">Records</h1>
        <p className="text-sm text-[hsl(var(--color-fg)/0.6)]">
          Static administrative record list.
        </p>
      </div>

      {/* Table Container */}
      <div className="border border-[hsl(var(--color-border))] rounded-md overflow-hidden p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            {/* Head */}
            <thead className="bg-[hsl(var(--color-muted))] text-left">
              <tr>
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  Name
                </th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  Owner
                </th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  Status
                </th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  Updated
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-[hsl(var(--color-border))]">
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-[hsl(var(--color-muted))]">
                  <td className="px-5 py-3 whitespace-nowrap">
                    <Link
                      href={`/ops/records/${r.id}`}
                      className="font-medium text-[hsl(var(--color-primary))] hover:opacity-80"
                    >
                      {r.name}
                    </Link>
                  </td>

                  <td className="px-5 py-3 whitespace-nowrap">{r.owner}</td>

                  <td className="px-5 py-3 whitespace-nowrap">
                    <span
                      className={`badge ${
                        r.status === "active"
                          ? "badge--active"
                          : "badge--inactive"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>

                  <td className="px-5 py-3 whitespace-nowrap text-[hsl(var(--color-fg)/0.6)]">
                    {r.updatedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
