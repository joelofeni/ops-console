declare module "*.css";

export type RecordStatus =
  | "active"
  | "inactive"
  | "pending"
  | "flagged"
  | "error";

export interface RecordItem {
  id: string;
  name: string;
  owner: string;
  status: RecordStatus;
  updatedAt: string; // ISO date string (YYYY-MM-DD)
}
