import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Book,
  Code,
  Wrench,
  Lightbulb,
  Search,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const docCategories = [
  {
    icon: Code,
    title: "API Documentation",
    description: "Complete API reference for integrating our solutions.",
    links: [
      { name: "REST API Reference", href: "#" },
      { name: "Authentication Guide", href: "#" },
      { name: "Rate Limits & Quotas", href: "#" },
      { name: "Error Handling", href: "#" },
    ],
  },
  {
    icon: Book,
    title: "Product Docs",
    description: "Detailed documentation for all our products and services.",
    links: [
      { name: "Getting Started", href: "#" },
      { name: "Core Concepts", href: "#" },
      { name: "Configuration", href: "#" },
      { name: "Best Practices", href: "#" },
    ],
  },
  {
    icon: Wrench,
    title: "Setup Guides",
    description: "Step-by-step guides for setting up and deploying solutions.",
    links: [
      { name: "Quick Start", href: "#" },
      { name: "Environment Setup", href: "#" },
      { name: "Deployment Guide", href: "#" },
      { name: "Integration Patterns", href: "#" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Tutorials",
    description: "Hands-on tutorials for common use cases and implementations.",
    links: [
      { name: "Building Your First App", href: "#" },
      { name: "AI Integration Tutorial", href: "#" },
      { name: "Automation Workflows", href: "#" },
      { name: "Advanced Examples", href: "#" },
    ],
  },
];

const popularDocs = [
  {
    title: "Quick Start Guide",
    description: "Get up and running in 5 minutes",
    category: "Getting Started",
  },
  {
    title: "API Authentication",
    description: "Learn how to authenticate API requests",
    category: "API Reference",
  },
  {
    title: "Webhook Setup",
    description: "Configure webhooks for real-time events",
    category: "Integration",
  },
  {
    title: "Error Handling Best Practices",
    description: "Handle errors gracefully in your applications",
    category: "Best Practices",
  },
  {
    title: "Deployment Checklist",
    description: "Ensure a smooth production deployment",
    category: "Deployment",
  },
  {
    title: "Security Guidelines",
    description: "Keep your integration secure",
    category: "Security",
  },
];

const Docs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
        <div className="container-padding relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Documentation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            >
              Developer Documentation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Everything you need to integrate and build with Leafclutch
              solutions.
            </motion.p>
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-md"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="h-12 pl-10 pr-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doc Categories */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {category.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-1 text-sm text-accent transition-colors hover:underline"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Access
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Popular Documentation
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularDocs.map((doc, index) => (
              <motion.a
                key={doc.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md"
              >
                <span className="mb-2 inline-block rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {doc.category}
                </span>
                <h3 className="mb-1 font-semibold text-foreground group-hover:text-accent">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {doc.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Can't Find What You're Looking For?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Our support team is here to help you with any questions.
          </p>
          <Button asChild variant="default" size="lg">
            <Link to="/get-started">Contact Support</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Docs;
