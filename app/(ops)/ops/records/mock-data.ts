import { RecordItem } from "@/types/globals";

const owners = [
  "Finance",
  "Operations",
  "Compliance",
  "Engineering",
  "Risk",
  "Admin",
  "Support",
];

const statuses: RecordItem["status"][] = [
  "active",
  "inactive",
  "pending",
  "flagged",
  "error",
];

// Deterministic date generator
function fixedDate(index: number) {
  const base = new Date("2026-01-20"); // stable anchor
  const date = new Date(base);
  date.setDate(base.getDate() - index * 3); // predictable spread
  return date.toISOString().split("T")[0];
}

export const records: RecordItem[] = Array.from({ length: 40 }, (_, index) => {
  const id = `rec-${String(index + 1).padStart(3, "0")}`;

  return {
    id,
    name: `Operational Record ${index + 1}`,
    owner: owners[index % owners.length],
    status: statuses[index % statuses.length],
    updatedAt: fixedDate(index),
  };
});
