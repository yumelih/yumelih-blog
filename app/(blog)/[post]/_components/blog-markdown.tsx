export default function BlogMarkdown({ mdContent }: { mdContent: string }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: mdContent }} />;
    </div>
  );
}
