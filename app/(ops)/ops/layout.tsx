"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkBase = "block px-3 py-2 rounded-md text-sm transition-colors";
  const linkActive = "bg-[var(--color-bg-muted)] font-medium";
  const linkInactive =
    "text-[var(--color-text-muted)] hover:bg-[var(--color-bg-muted)]";

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="min-h-screen md:flex">
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
    fixed inset-y-0 left-0 z-50 w-64
    bg-[hsl(var(--color-bg))]
    border-r border-[hsl(var(--color-border))]
    px-4 py-6
    transform transition-transform duration-200
    shadow-lg md:shadow-none
    md:static md:translate-x-0
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
        >
          <div className="mb-6 text-sm font-medium">Ops Console</div>

          <nav className="space-y-1">
            <Link
              href="/ops"
              onClick={() => setOpen(false)}
              className={`${linkBase} ${
                pathname === "/ops" ? linkActive : linkInactive
              }`}
            >
              Overview
            </Link>

            <Link
              href="/ops/records"
              onClick={() => setOpen(false)}
              className={`${linkBase} ${
                pathname.startsWith("/ops/records") ? linkActive : linkInactive
              }`}
            >
              Records
            </Link>
          </nav>
        </aside>

        {/* Main */}
        <div className="flex flex-col flex-1">
          <header className="h-14 border-b border-[var(--color-border)] px-6 flex items-center justify-between text-sm font-medium">
            <div>Admin Panel</div>

            <button className="text-sm md:hidden" onClick={() => setOpen(true)}>
              Menu
            </button>
          </header>

          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
