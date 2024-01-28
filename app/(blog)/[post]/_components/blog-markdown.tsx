import Markdown from "react-markdown";

export default function BlogMarkdown({ mdURL }: { mdURL: string }) {
  return <Markdown>{mdURL}</Markdown>;
}
