import Link from "next/link";
import "./header.css";
const TheHeader = () => {
  return (
    <header className="header">
      <Link href={"/"} className="link">
        Home
      </Link>
      <Link href={"/blog"} className="link">
        Blog
      </Link>
      <Link href={"/about"} className="link">
        About
      </Link>
    </header>
  );
};

export { TheHeader };
