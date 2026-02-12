import { RecordItem } from "@/types/globals";

type StatusFilter =
  | "all"
  | "active"
  | "inactive"
  | "pending"
  | "flagged"
  | "error";

export function filterRecords(
  records: RecordItem[],
  search: string,
  status: StatusFilter,
) {
  let result = records;

  if (search) {
    const query = search.toLowerCase();
    result = result.filter((r) => r.name.toLowerCase().includes(query));
  }

  if (status !== "all") {
    result = result.filter((r) => r.status === status);
  }

  return result;
}
