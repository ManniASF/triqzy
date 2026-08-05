"use client";

import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Story", href: "#story" },
  { name: "Collection", href: "#collection" },
  { name: "Mint", href: "#mint" },
  { name: "Allowlist", href: "#allowlist" },
  { name: "FAQ", href: "#faq" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .25 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 16,
            }}
            className="absolute right-0 flex h-full w-[88%] max-w-sm flex-col bg-[#090909] p-8"
          >
            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-black tracking-[0.25em]">
                TRIQZY
              </h2>

              <button
                onClick={onClose}
                className="text-3xl text-zinc-400 hover:text-[#00C805]"
              >
                ×
              </button>

            </div>

            <div className="mt-16 flex flex-col gap-8">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-bold text-white transition hover:text-[#00C805]"
                >
                  {link.name}
                </a>
              ))}

            </div>

            <div className="mt-auto">

              <Button className="w-full">
                Mint Soon
              </Button>

            </div>

          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}