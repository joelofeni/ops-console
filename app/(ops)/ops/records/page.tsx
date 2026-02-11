import Link from "next/link";
import { records } from "./mock-data";

export default function RecordsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold h-14">Records</h1>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          Static administrative record list.
        </p>
      </div>

      <div className="border border-[var(--color-border)] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--color-bg-muted)] text-left">
              <tr>
                <th className="px-6 py-3 font-medium whitespace-nowrap">
                  Name
                </th>
                <th className="px-6 py-3 font-medium whitespace-nowrap">
                  Owner
                </th>
                <th className="px-6 py-3 font-medium whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-3 font-medium whitespace-nowrap">
                  Updated
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--color-border)]">
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-[var(--color-bg-muted)]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/ops/records/${r.id}`}
                      className="font-medium underline-offset-2 hover:underline"
                    >
                      {r.name}
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{r.owner}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
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

                  <td className="px-6 py-4 text-[var(--color-text-muted)] whitespace-nowrap">
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
