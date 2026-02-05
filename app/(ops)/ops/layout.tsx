import Link from "next/link";

export default function OpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-border p-4">
        <nav className="space-y-2 text-sm">
          <Link href="/ops" className="block">
            Dashboard
          </Link>
          <Link href="/ops/records" className="block">
            Records
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
