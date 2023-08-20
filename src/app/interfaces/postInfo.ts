import { Tag } from "./tag";

export interface PostInfo {
  title: string;
  fileName: string;
  published: string;
  description?: string;
  tags: string[];
}
