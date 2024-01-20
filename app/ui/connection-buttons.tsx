import Image from "next/image";

export default function ConnectionButtons() {
  return (
    <div className="mt-4 flex gap-2">
      <a
        href="https://www.linkedin.com/in/yusuf-melih-akyurek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/linkedin.png"
          width={25}
          height={25}
          alt="linkedin logo"
          className="rounded-full hover:opacity-85"
        />
      </a>
      <a
        href="https://github.com/yumelih"
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github.png"
          width={25}
          height={25}
          alt="github logo"
          className="rounded-full  hover:opacity-85"
        />
      </a>
    </div>
  );
}
