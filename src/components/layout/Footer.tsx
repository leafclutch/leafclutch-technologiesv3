import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/HD_logo_only_png.png";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    // { name: "Our Projects", path: "/projects" },
    // { name: "Pricing", path: "/pricing" },
    // { name: "Docs", path: "/docs" },
    { name: "Services", path: "/services" },

    { name: "Careers", path: "/careers" },
  ],
  services: [
    { name: "Software Services", path: "/services#software" },
    { name: "AI & Automation", path: "/services#ai" },
    { name: "Web Development", path: "/services#web" },
    { name: "DevOps Solutions", path: "/services#devops" },
  ],
  careers: [
    { name: "Jobs", path: "/careers/jobs" },
    { name: "Internship", path: "/careers/internship" },
    { name: "Training Programs", path: "/careers/training" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-padding mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-highlight">
                <span className="text-xl font-bold text-primary">L</span>
              </div> */}
              <img
                src={logo}
                alt="LeafClutch Technologies"
                className="h-12 w-15"
              />

              <span className="text-xl font-bold">
                Leafclutch Technologies<span className="text-highlight">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/80">
              We build intelligent software, AI, and automation solutions that
              drive measurable business growth for startups and enterprises
              worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/leafclutch-technologies/"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Github className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-highlight">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-highlight"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-highlight">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-highlight"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-highlight">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-highlight" />
                info@leafclutch.dev
              </li>
              {/* <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-highlight" />
                +1 (555) 123-4567
              </li> */}
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-highlight" />
                Bhairahawa, Rupandehi, Nepal.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 py-6 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Leafclutch Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-highlight">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-highlight">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
