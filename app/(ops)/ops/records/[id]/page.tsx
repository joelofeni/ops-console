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
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">{record.name}</h1>
        <p className="text-sm text-[hsl(var(--color-fg)/0.6)]">
          Record detail view
        </p>
      </div>

      {/* Detail Card */}
      <div className="border border-[hsl(var(--color-border))] rounded-md p-6">
        <div className="grid grid-cols-1 text-sm sm:grid-cols-2 gap-y-6 gap-x-12">
          <DetailItem label="Record ID" value={record.id} />

          <DetailItem label="Owner" value={record.owner} />

          <DetailItem
            label="Status"
            value={
              <span
                className={`badge ${
                  record.status === "active"
                    ? "badge--active"
                    : "badge--inactive"
                }`}
              >
                {record.status}
              </span>
            }
          />

          <DetailItem label="Last Updated" value={record.updatedAt} />
        </div>
      </div>
    </div>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <div className="text-[hsl(var(--color-fg)/0.6)]">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
