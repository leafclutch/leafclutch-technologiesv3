import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Bot,
  BarChart3,
  Cloud,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Software Services",
    description:
      "Custom software development, backend systems, APIs, and scalable enterprise solutions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive websites, web applications, dashboards, and admin panels built for performance.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Android & iOS apps, cross-platform solutions with performance-focused development.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI-powered solutions, workflow automation, n8n pipelines, and intelligent chatbots.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Data cleaning, preprocessing, visualization dashboards, and business intelligence.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Private cloud setup, Nextcloud deployment, CI/CD pipelines, and secure infrastructure.",
    color: "bg-accent/10 text-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            Comprehensive Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From custom software to AI automation, we deliver end-to-end
            solutions that transform your business operations.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
              >
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Training CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-highlight/50 bg-highlight/10 p-8 md:p-12"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-highlight">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  Training & Internship Programs
                </h3>
                <p className="text-muted-foreground">
                  Industry-focused learning in Data Science, AI, Software
                  Development & more.
                </p>
              </div>
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/careers/training">
                Explore Programs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
