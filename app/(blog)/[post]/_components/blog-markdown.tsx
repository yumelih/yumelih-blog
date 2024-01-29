import SubscribeNewslatter from "../../../ui/subscribe-newslatter";

export default function BlogMarkdown({ mdContent }: { mdContent: string }) {
  return <div dangerouslySetInnerHTML={{ __html: mdContent }} />;
}
