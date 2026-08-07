import Container from "@/components/shared/Container";

const links = [
  { name: "Story", href: "#story" },
  { name: "Collection", href: "#collection" },
  { name: "Mint", href: "#mint" },
  { name: "Allowlist", href: "#allowlist" },
  { name: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070707] py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-4xl font-black tracking-[0.2em] text-white">
              TRIQZY
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">
              A premium Genesis NFT collection built for collectors,
              creators and digital culture on Robinhood EVM.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-lg font-bold text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 transition hover:text-[#00C805]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}

          <div>
            <h3 className="text-lg font-bold text-white">
              Community
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="https://x.com/triqzy_nfts"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 transition hover:border-[#00C805] hover:text-[#00C805]"
              >
                Follow on X
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 px-5 py-3 text-zinc-500 transition hover:border-[#00C805] hover:text-[#00C805]"
              >
                Discord
              </a>

            </div>
          </div>

        </div>

        <div className="mt-20 border-t border-white/5 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} TRIQZY. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}