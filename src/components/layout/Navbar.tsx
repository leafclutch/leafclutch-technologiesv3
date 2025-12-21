import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/HD_logo_only_png.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Our Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  {
    name: "Careers",
    path: "/careers",
    children: [
      { name: "Jobs", path: "/careers/jobs" },
      { name: "Internship", path: "/careers/internship" },
      { name: "Training & Internship", path: "/careers/training" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-padding mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Leafclutch Technologies" className="h-12 w-15" />
          <span className="text-lg font-bold text-foreground lg:text-xl">
            Leafclutch Technologies<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Nav Items */}
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setCareersOpen(true)}
                onMouseLeave={() => setCareersOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                    location.pathname.startsWith("/careers")
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {careersOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-border bg-card p-2 shadow-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted ${
                            isActive(child.path)
                              ? "bg-muted text-primary font-medium"
                              : "text-muted-foreground"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

          {/* Get Started Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGetStartedOpen(true)}
            onMouseLeave={() => setGetStartedOpen(false)}
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/get-started" className="flex items-center gap-1">
                Get Started <ChevronDown className="h-4 w-4" />
              </Link>
            </Button>

            <AnimatePresence>
              {getStartedOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-border bg-card p-2 shadow-lg z-50"
                >
                  <Link
                    to="/get-started"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/register"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                  >
                    Login
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="container-padding mx-auto flex flex-col gap-2 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setCareersOpen(!careersOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          careersOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {careersOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 flex flex-col gap-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={() => setIsOpen(false)}
                              className={`rounded-lg px-4 py-2 text-sm ${
                                isActive(child.path)
                                  ? "bg-muted text-primary font-medium"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted ${
                      isActive(item.path)
                        ? "bg-muted text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* Mobile Get Started Dropdown */}
              <div className="mt-2 flex flex-col gap-1">
                <Link
                  to="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Get Started
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

