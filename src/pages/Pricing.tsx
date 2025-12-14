import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projectPlans = [
  {
    name: "Starter",
    price: "Rs. 5,000",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 4 weeks development",
      "Basic web application",
      "Responsive design",
      "Basic SEO optimization",
      "3 months support",
      "Documentation included",
    ],
    recommended: false,
  },
  {
    name: "Professional",
    price: "Rs.15,000",
    description: "Ideal for growing businesses",
    features: [
      "Up to 12 weeks development",
      "Complex web/mobile application",
      "Custom UI/UX design",
      "API integrations",
      "Database design & setup",
      "6 months support",
      "Performance optimization",
      "Security audit",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale solutions",
    features: [
      "Unlimited development scope",
      "Dedicated team",
      "AI/ML integration",
      "Private cloud setup",
      "24/7 priority support",
      "SLA guarantees",
      "Compliance & security",
      "Ongoing maintenance",
    ],
    recommended: false,
  },
];

const monthlyPlans = [
  {
    name: "Essential",
    price: "Rs. 2,500",
    period: "/month",
    description: "Ongoing support and maintenance",
    features: [
      "20 hours/month development",
      "Bug fixes & updates",
      "Performance monitoring",
      "Email support",
      "Monthly reports",
    ],
  },
  {
    name: "Growth",
    price: "Rs. 5,000",
    period: "/month",
    description: "Active development and scaling",
    features: [
      "40 hours/month development",
      "Feature development",
      "Priority support",
      "Weekly check-ins",
      "Infrastructure management",
      "Analytics & insights",
    ],
  },
  {
    name: "Scale",
    price: "Rs. 10,000",
    period: "/month",
    description: "Full-service technology partnership",
    features: [
      "Unlimited development hours",
      "Dedicated developer(s)",
      "24/7 support",
      "Strategy consulting",
      "DevOps & cloud management",
      "Custom integrations",
      "AI/ML capabilities",
    ],
  },
];

const trainingPrograms = [
  {
    name: "Individual Course",
    price: "Rs. 499",
    description: "Single course enrollment",
    features: [
      "Access to one course",
      "Hands-on projects",
      "Certificate of completion",
      "Community access",
      "3 months access",
    ],
  },
  {
    name: "Professional Track",
    price: "Rs. 999",
    description: "Complete learning path",
    features: [
      "4-6 related courses",
      "Career mentorship",
      "Portfolio projects",
      "Job assistance",
      "6 months access",
      "1-on-1 sessions",
    ],
  },
  {
    name: "Internship Program",
    price: "Rs. 5,999",
    description: "Work experience + training",
    features: [
      "3-month internship",
      "Real project experience",
      "Industry mentorship",
      "Certification",
      "Career placement support",
      "Stipend (based on performance)",
    ],
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero section-padding">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <div className="container-padding relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
            >
              Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              Clear, competitive pricing for every stage of your business
              journey. No hidden fees, no surprises.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project-Based Pricing */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Project-Based
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              One-Time Projects
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {projectPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl ${
                  plan.recommended
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {plan.recommended && (
                  <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground"> starting</span>
                  )}
                </div>
                <p className="mb-6 text-muted-foreground">{plan.description}</p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.recommended ? "hero" : "outline"}
                  className="w-full"
                >
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Monthly Plans
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Ongoing Partnership
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {monthlyPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mb-6 text-muted-foreground">{plan.description}</p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/get-started">Contact Sales</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Internship Pricing */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Education
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Training & Internship Programs
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {trainingPrograms.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-highlight/50 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="mb-6 text-muted-foreground">{plan.description}</p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-highlight" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="hero" className="w-full">
                  <Link to="/careers/training">Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-highlight">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Have Questions?</h3>
                <p className="text-primary-foreground/80">
                  Get a free consultation to discuss your specific needs.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="highlight"
              size="lg"
              className="bg-highlight text-primary hover:bg-highlight/90"
            >
              <Link to="/get-started">
                Schedule a Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
