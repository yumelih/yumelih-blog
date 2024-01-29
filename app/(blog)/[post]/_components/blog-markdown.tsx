import SubscribeNewslatter from "../../(home)/_components/subscribe-newslatter";

export default function BlogMarkdown({ mdContent }: { mdContent: string }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: mdContent }} />
      <div className="col-start-2">
        <SubscribeNewslatter />
      </div>
    </>
  );
}
