import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="text mr-10 w-full select-none lg:mr-0">
      <Link href="/" className="mr-10 flex w-full justify-center ">
        <Image src="/yumelih.svg" width={350} height={35} alt="Yumelihs blog" />
      </Link>
    </div>
  );
}
