import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Header({ cartItemCount = 0, onCartClick }: HeaderProps) {
  const [location] = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <a
            className={`text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors ${
              location === link.href ? "font-medium" : ""
            }`}
            data-testid={`link-${link.label.toLowerCase()}`}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/">
            <a className="flex items-center gap-2" data-testid="link-logo">
              <h1 className="text-2xl font-serif font-semibold text-foreground">
                Artisan
              </h1>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-200">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-48 lg:w-64"
                  data-testid="input-search"
                  autoFocus
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSearchOpen(false)}
                  data-testid="button-close-search"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSearchOpen(true)}
                  data-testid="button-search"
                  className="hidden sm:flex"
                >
                  <Search className="h-5 w-5" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className="relative"
                  onClick={onCartClick}
                  data-testid="button-cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center" data-testid="text-cart-count">
                      {cartItemCount}
                    </span>
                  )}
                </Button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="md:hidden"
                      data-testid="button-menu"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <nav className="flex flex-col gap-4 mt-8">
                      <NavLinks />
                    </nav>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
