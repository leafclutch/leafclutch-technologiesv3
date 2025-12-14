import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import qr from "@/assets/qr.png";

export function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-8 md:p-12 lg:p-16"
        >
          {/* Background Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-highlight/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

<div className="relative grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Let's discuss how our solutions can help you achieve your goals.
                Get a free consultation with our experts.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  asChild
                  variant="highlight"
                  size="xl"
                  className="bg-highlight text-primary hover:bg-highlight/90"
                >
                  <Link to="/get-started">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="hero-outline"
                  size="xl"
                >
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>


           {/* QR */}
           <img
           src={qr}
           alt="QR Code"
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-lg shadow-md"
            />

            {/* Contact Info */}
            <div className="flex flex-col gap-4 lg:items-end">
              <div className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-highlight">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Call us 🇳🇵</p>
                  <p className="font-semibold text-primary-foreground">
                    +977-9766722920
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-highlight">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Email us</p>
                  <p className="font-semibold text-primary-foreground">
                    info@leafclutch.dev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
