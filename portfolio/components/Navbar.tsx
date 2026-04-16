import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Link href="/" className="text-lg font-semibold">
          MyPortfolio
        </Link>

        <ul className="flex items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-black transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}