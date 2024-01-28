interface BlogInterface {
  _id: string;
  title: string;
  posterImage: string;
  blogMd: string;
}

export type Blog = BlogInterface | undefined | null;

export type BlogType = Blog[] | undefined;
