import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="bg-gray-800 h-16 flex justify-center items-center text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">Usuf Ali</Link>
        <ul className="flex gap-5">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* <button>Visit Resume</button> */}
        <Link
          href="https://drive.google.com/file/d/1FxQvlSuwnGXLJKVNeJMQ8fLpnj-SlQQX/view"
          target="_blank"
        >
          <Button text={"My Resume"} />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
