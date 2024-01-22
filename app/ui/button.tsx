import clsx from "clsx";

export default function Button({
  style = "normal",
  children,
}: {
  style?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={clsx(
        "rounded-md py-3 text-sm font-semibold uppercase tracking-widest text-gray-200  hover:opacity-90",
        {
          "mt-6 w-full bg-green-600": style === "normal",
          "w-full bg-green-500 px-4 lg:w-auto": style === "additional",
          " w-full max-w-3xl bg-green-600 ": style === "pagination",
        },
      )}
    >
      {children}
    </button>
  );
}
