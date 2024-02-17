"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "./mobile-nav";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { NAV_LINKS } from "@/lib/constants/mappingConstants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isSignedIn } = useAuth();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b supports-backdrop-blur:bg-background/60 border-muted backdrop-blur">
      <div className="container flex items-center h-14">
        <div className="flex mr-4">
          <a className="flex items-center mr-6 space-x-2 font-bold" href="/">
            EventiX
          </a>
          <nav className="items-center hidden space-x-6 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.text.toLocaleLowerCase()}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end flex-1 gap-3">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Button asChild>
              <SignInButton mode="modal">Sign In</SignInButton>
            </Button>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild className="-order-1">
            <Button
              className="mr-3 md:hidden"
              variant="outline"
              size="icon"
              aria-label="Open Menu"
              onClick={handleMenuClick}
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <MobileNav />
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
