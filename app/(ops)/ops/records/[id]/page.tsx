export default async function RecordDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">Record Detail</h1>

      <div className="border border-border p-4 text-sm">Record ID: {id}</div>
    </div>
  );
}
