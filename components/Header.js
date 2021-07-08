import Link from "next/link";

const Header = () => {
  return (
    <header>
      Personal Page
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </header>
  );
};

export default Header;
