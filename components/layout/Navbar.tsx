"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Story", href: "#story" },
  { name: "Collection", href: "#collection" },
  { name: "Mint", href: "#mint" },
  { name: "Allowlist", href: "#allowlist" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <a
            href="#"
            className="text-2xl font-black tracking-[0.25em] text-white transition hover:text-[#00C805]"
          >
            TRIQZY
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-zinc-400
                  transition
                  duration-300
                  hover:text-[#00C805]
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:block">
            <Button>
              Mint Soon
            </Button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xl
              text-white
              transition
              hover:border-[#00C805]
              hover:text-[#00C805]
              lg:hidden
            "
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}