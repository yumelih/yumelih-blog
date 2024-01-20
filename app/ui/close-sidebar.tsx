import { Bars3Icon } from "@heroicons/react/16/solid";

type OnCloseSidebar = {
  onCloseSidebar: () => void;
};

export default function CloseSidebar({ onCloseSidebar }: OnCloseSidebar) {
  return (
    <Bars3Icon
      className="h-12 w-12 cursor-pointer  justify-self-start border-2 border-gray-900 p-1 hover:border-gray-800 hover:text-gray-800 lg:hidden"
      onClick={onCloseSidebar}
    />
  );
}
