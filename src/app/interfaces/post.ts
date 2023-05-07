import { Tag } from "./tag";

export interface Post {
  link: string;
  fileName: string;
  title: string;
  content: string;
  tags: Tag[];
}
