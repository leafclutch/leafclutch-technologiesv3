import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-highlight/20 blur-3xl" />
      </div>

      <div className="container-padding relative mx-auto max-w-7xl py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
            >
              <Sparkles className="h-4 w-4" />
              Empowering Business Growth with AI
            </motion.div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              We build intelligent{" "}
              <span className="gradient-text">software, AI, and automation</span>{" "}
              solutions that drive measurable business growth.
            </h1>

            <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl lg:mx-0 mx-auto">
              Unlock new opportunities with reliable software solutions and
              responsible, high-performance AI automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild variant="hero" size="xl">
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-accent" />
                <span>Enterprise-ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-5 w-5 text-accent" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-5 w-5 text-accent" />
                <span>Responsible AI</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-highlight" />
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-5/6 rounded bg-muted" />
                  <div className="mt-6 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="flex gap-4">
                    <div className="h-10 flex-1 rounded-lg bg-primary" />
                    <div className="h-10 flex-1 rounded-lg bg-secondary" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-20 rounded-xl border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Performance</p>
                    <p className="font-semibold text-foreground">+98%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 bottom-20 rounded-xl border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-highlight/30">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                    <p className="font-semibold text-foreground">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
