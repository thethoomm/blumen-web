import { useState } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/button";

const items = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Register",
    url: "/register",
  },
  {
    label: "Products",
    url: "/products",
  },
  {
    label: "About us",
    url: "/about-us",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toogleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="w-full bg-gray">
      <nav className="container-lg flex items-center justify-between py-3">
        <img
          src="/assets/logo.svg"
          alt="Blumen logo"
          draggable={false}
          className="size-12"
        />

        <ul className="hidden md:flex items-center gap-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className="font-raleway text-primary-lunar hover:text-primary-avacado"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <SignedOut>
          <SignInButton>
            <Button variant="outline" className="hidden md:block">
              Entrar
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <button className="block md:hidden" onClick={toogleMobileMenu}>
          <Menu />
        </button>
      </nav>

      <nav className={isMobileMenuOpen ? "flex flex-col p-4 gap-2" : "hidden"}>
        <ul className="flex flex-col">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className="font-raleway text-lg text-primary-lunar hover:text-primary-avacado"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <SignedOut>
          <SignInButton>
            <Button variant="outline" className="hidden md:block">
              Entrar
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
