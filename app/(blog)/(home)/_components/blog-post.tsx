import Image from "next/image";
import Link from "next/link";

export default function BlogPost({
  id,
  title,
  posterImage,
}: {
  id: string;
  title: string;
  posterImage: string;
}) {
  return (
    <>
      <div className="grid grid-cols-[max-content_minmax(min-content,600px)] justify-center gap-x-4 gap-y-2">
        <Image src={posterImage} width={160} height={160} alt="blog image" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center gap-3 text-gray-600">
            <p>Published 2 days ago</p>
            <p className="text-2xl">&middot;</p>
            <p>5 min read</p>
            <p className="text-2xl">&middot;</p>
            <p>8 comments</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies...
          </p>
        </div>
        <Link href={`/${id}`} className=" col-start-2 text-green-500">
          Read more →
        </Link>
      </div>
    </>
  );
}
