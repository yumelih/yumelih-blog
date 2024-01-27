export default async function Page({ params }: { params: { post: string } }) {
  const postId = params.post;

  return (
    <div className="mx-auto flex w-5/6 flex-col items-center gap-12 py-12 lg:w-2/3"></div>
  );
}
