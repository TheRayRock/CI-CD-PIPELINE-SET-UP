import { Triangle } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-5 bg-white">
      <div className="flex items-center gap-2">
        <Image src="/Icon.svg" alt="Hero" width={45} height={45} />
        <h1 className="text-4xl font-bold text-[#263238]">Nexcent</h1>
      </div>

      <ul className="flex gap-10 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-[#4CAF4F]">Home</li>
        <li className="cursor-pointer hover:text-[#4CAF4F]">Features</li>
        <li className="cursor-pointer hover:text-[#4CAF4F]">Community</li>
        <li className="cursor-pointer hover:text-[#4CAF4F]">Blog</li>
        <li className="cursor-pointer hover:text-[#4CAF4F]">Pricing</li>
      </ul>

      <button
        className="
      bg-[#4CAF4F]
      text-white
      px-6
      py-3
      rounded
      flex
      items-center
      gap-2
      hover:bg-[#43a047]
      transition-all
      duration-300
      cursor-pointer
    "
      >
        Register Now
        <span>→</span>
      </button>
    </nav>
  );
}
