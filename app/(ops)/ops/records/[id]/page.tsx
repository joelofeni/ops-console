export default async function RecordDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium">Record Detail</h1>

      <section className="border border-border p-4 space-y-2">
        <div className="text-sm text-muted">Record ID</div>
        <div className="font-mono text-sm">{id}</div>
      </section>

      <section className="border border-border p-4 space-y-2">
        <div className="text-sm text-muted">Status</div>
        <div className="text-sm">Active</div>
      </section>

      <section className="border border-border p-4 space-y-2">
        <div className="text-sm text-muted">Ownership</div>
        <div className="text-sm">Finance Team</div>
      </section>

      <section className="border border-border p-4 space-y-2">
        <div className="text-sm text-muted">Last Updated</div>
        <div className="text-sm">2026-01-20</div>
      </section>
    </div>
  );
}
