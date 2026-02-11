import { notFound } from "next/navigation";
import { records } from "../mock-data";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function RecordDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = records.find((r) => r.id === id);

  if (!record) {
    notFound();
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-lg font-semibold h-14">{record.name}</h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Administrative record detail view.
        </p>
      </div>

      {/* Detail Card */}
      <div className="border border-[var(--color-border)] rounded-md">
        <div className="divide-y divide-[var(--color-border)] text-sm">
          <div className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-3 md:gap-6">
            <div className="text-[var(--color-text-muted)]">Record ID</div>
            <div className="font-medium break-all md:col-span-2">
              {record.id}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-3 md:gap-6">
            <div className="text-[var(--color-text-muted)]">Owner</div>
            <div className="md:col-span-2">{record.owner}</div>
          </div>

          <div className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-3 md:gap-6">
            <div className="text-[var(--color-text-muted)]">Status</div>
            <div className="md:col-span-2">
              <span
                className={`badge ${
                  record.status === "active"
                    ? "badge--active"
                    : "badge--inactive"
                }`}
              >
                {record.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-3 md:gap-6">
            <div className="text-[var(--color-text-muted)]">Last Updated</div>
            <div className="md:col-span-2 text-[var(--color-text-muted)]">
              {record.updatedAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
