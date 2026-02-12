import { RecordItem } from "@/types/globals";

export function filterRecords(
  records: RecordItem[],
  search: string,
  status: "all" | "active" | "inactive",
) {
  return records.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "all" ? true : r.status === status;

    return matchesSearch && matchesStatus;
  });
}
