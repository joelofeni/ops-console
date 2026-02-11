"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { records } from "./mock-data";

export default function RecordsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : r.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-lg font-semibold">Records</h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Static administrative record list.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-[var(--color-border)] rounded-md px-4 py-2 text-sm w-full md:max-w-xs"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as "all" | "active" | "inactive")
          }
          className="border border-[var(--color-border)] rounded-md px-4 py-2 text-sm w-full md:w-auto"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="border border-[var(--color-border)] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--color-muted)] text-left">
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
              {filteredRecords.map((r) => (
                <tr key={r.id} className="hover:bg-[var(--color-muted)]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/ops/records/${r.id}`}
                      className="font-medium hover:underline"
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

              {filteredRecords.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-6 text-center text-[var(--color-text-muted)]"
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
