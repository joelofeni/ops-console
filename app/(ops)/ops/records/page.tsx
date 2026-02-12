"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { records } from "./mock-data";
import { filterRecords } from "./utils";

type StatusFilter = "all" | "active" | "inactive";
type SortDirection = "asc" | "desc";

export default function RecordsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("q") ?? "";
  const statusParam = searchParams.get("status");
  const sortParam = searchParams.get("sort");

  const statusFilter: StatusFilter =
    statusParam === "active" || statusParam === "inactive"
      ? statusParam
      : "all";

  const sortDirection: SortDirection = sortParam === "asc" ? "asc" : "desc";

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  let filteredRecords = filterRecords(records, search, statusFilter);

  filteredRecords = [...filteredRecords].sort((a, b) => {
    const aDate = new Date(a.updatedAt).getTime();
    const bDate = new Date(b.updatedAt).getTime();
    return sortDirection === "asc" ? aDate - bDate : bDate - aDate;
  });

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold">Records</h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Static administrative record list.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => updateParams("q", e.target.value)}
          className="border border-[var(--color-border)] rounded-md px-4 py-2 text-sm w-full md:max-w-xs"
        />

        <div className="flex w-full gap-4 md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => updateParams("status", e.target.value)}
            className="border border-[var(--color-border)] rounded-md px-4 py-2 text-sm w-full"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            value={sortDirection}
            onChange={(e) => updateParams("sort", e.target.value)}
            className="border border-[var(--color-border)] rounded-md px-4 py-2 text-sm w-full"
          >
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>
        </div>
      </div>

      <div className="border border-[var(--color-border)] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm leading-5">
            <thead className="bg-[var(--color-muted)] text-[11px] uppercase tracking-wide text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-2 font-medium text-left">Name</th>
                <th className="px-4 py-2 font-medium text-left">Owner</th>
                <th className="px-4 py-2 font-medium text-left">Status</th>
                <th className="px-4 py-2 font-medium text-left">Updated</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--color-border)]">
              {filteredRecords.map((r) => (
                <tr
                  key={r.id}
                  className="hover:bg-[var(--color-muted)] transition-colors"
                >
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <Link
                      href={`/ops/records/${r.id}`}
                      className="hover:underline underline-offset-2"
                    >
                      {r.name}
                    </Link>
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-[var(--color-text-muted)]">
                    {r.owner}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap">
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

                  <td className="px-4 py-3 whitespace-nowrap text-[var(--color-text-muted)] text-[12px]">
                    {r.updatedAt}
                  </td>
                </tr>
              ))}

              {filteredRecords.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-6 text-center text-[var(--color-text-muted)] text-sm"
                  >
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
