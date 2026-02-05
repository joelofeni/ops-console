import Link from "next/link";
import { records } from "./mock-data";

export default function RecordsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">Records</h1>

      <table className="w-full border border-border text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="border border-border p-2 text-left">Name</th>
            <th className="border border-border p-2 text-left">Owner</th>
            <th className="border border-border p-2 text-left">Status</th>
            <th className="border border-border p-2 text-left">Updated</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr
              key={r.id}
              className="hover:bg-muted/50 focus-within:bg-muted/50"
            >
              <td className="border border-border p-2">
                <Link href={`/ops/records/${r.id}`} className="underline">
                  {r.name}
                </Link>
              </td>

              <td className="border border-border p-2">{r.owner}</td>

              <td className="border border-border p-2">
                <span
                  className={`badge ${
                    r.status === "active" ? "badge--active" : "badge--inactive"
                  }`}
                >
                  {r.status}
                </span>
              </td>

              <td className="border border-border p-2">{r.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
