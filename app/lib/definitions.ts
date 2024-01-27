export interface Blog {
  _id: string;
  title: string;
  posterImage: string;
  blogMd: string;
}

export type BlogType = Blog[];
