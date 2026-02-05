export default async function RecordDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium">Record Detail</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border p-4">
          <div className="text-sm text-muted">Record ID</div>
          <div className="font-mono text-sm">{id}</div>
        </div>

        <div className="border border-border p-4">
          <div className="text-sm text-muted">Status</div>
          <div className="text-sm">Active</div>
        </div>

        <div className="border border-border p-4">
          <div className="text-sm text-muted">Owner</div>
          <div className="text-sm">Finance Team</div>
        </div>

        <div className="border border-border p-4">
          <div className="text-sm text-muted">Last Updated</div>
          <div className="text-sm">2026-01-20</div>
        </div>
      </div>
    </div>
  );
}
