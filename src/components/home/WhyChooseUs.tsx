import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Users, Target, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Responsible AI",
    description:
      "We prioritize ethical AI practices, ensuring transparency, fairness, and accountability in every solution we build.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Our solutions are optimized for speed and efficiency, delivering measurable improvements to your business operations.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "We listen, understand, and tailor our solutions to your specific needs, ensuring complete satisfaction.",
  },
  {
    icon: Target,
    title: "Scalable Solutions",
    description:
      "Built for growth, our systems scale seamlessly from startup to enterprise-level demands.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our experienced engineers bring deep expertise across software, AI, data, and cloud technologies.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description:
      "We've helped businesses across industries achieve measurable growth and operational excellence.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Why Leafclutch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold text-foreground md:text-4xl"
            >
              Technology Partner You Can Trust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              We combine technical excellence with a deep understanding of
              business needs to deliver solutions that truly make a difference.
              Our commitment to quality, transparency, and client success sets
              us apart.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  5+
                </p>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  100%
                </p>
                <p className="text-sm text-muted-foreground">
                  Client Satisfaction
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  24/7
                </p>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </div>
            </motion.div>
          </div>

          {/* Reasons Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <reason.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
