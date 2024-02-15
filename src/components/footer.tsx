import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full gap-2 p-4 border-t lg:px-20 sm:flex-row shrink-0 md:px-6">
      <p className="text-gray-600">
        Project By{" "}
        <Link
          className="text-gray-500 hover:underline underline-offset-4"
          href="http://vigneshgupta.tech/"
        >
          Vignesh Gupta
        </Link>
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          href="https://github.com/vignesh-gupta/eventix/"
          target="_blank"
          className="p-1 transition rounded-full hover:bg-black hover:text-white"
        >
          <Github size={20} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
