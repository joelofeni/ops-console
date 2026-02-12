declare module "*.css";

export type RecordStatus = "active" | "inactive";

export interface RecordItem {
  id: string;
  name: string;
  owner: string;
  status: RecordStatus;
  updatedAt: string;
}
