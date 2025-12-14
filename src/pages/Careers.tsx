import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const openPositions = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Lead development of complex software solutions and mentor junior developers.",
  },
  {
    title: "AI/ML Engineer",
    department: "AI Team",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement machine learning models for client projects.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain CI/CD pipelines and cloud infrastructure.",
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Create beautiful, responsive user interfaces with React and TypeScript.",
  },
];

const Careers = () => {
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
              Careers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
            >
              Join Our{" "}
              <span className="gradient-text">Growing Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              Be part of a team that's shaping the future of technology. We offer
              exciting opportunities for growth, learning, and impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Jobs</h3>
              <p className="mb-4 text-muted-foreground">
                Full-time positions for experienced professionals ready to make
                an impact.
              </p>
              <Button asChild variant="outline">
                <Link to="/careers/jobs">
                  View Open Positions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Internship
              </h3>
              <p className="mb-4 text-muted-foreground">
                Gain real-world experience working on impactful projects with
                our team.
              </p>
              <Button asChild variant="outline">
                <Link to="/careers/internship">
                  Explore Internships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-highlight/50 bg-highlight/10 p-8 text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-highlight">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Training & Internship
              </h3>
              <p className="mb-4 text-muted-foreground">
                Learn in-demand skills with industry-focused programs and
                mentorship.
              </p>
              <Button asChild variant="hero">
                <Link to="/careers/training">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Open Positions
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Featured Opportunities
            </h2>
          </div>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-md md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {position.title}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link to="/careers/jobs">Apply Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/careers/jobs">
                View All Positions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Why Join LeafClutch?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid gap-6 text-left sm:grid-cols-2"
            >
              <div className="rounded-xl bg-primary-foreground/10 p-4">
                <h3 className="mb-2 font-semibold">Remote-First Culture</h3>
                <p className="text-sm text-primary-foreground/80">
                  Work from anywhere with flexible hours and a healthy work-life
                  balance.
                </p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4">
                <h3 className="mb-2 font-semibold">Continuous Learning</h3>
                <p className="text-sm text-primary-foreground/80">
                  Access to courses, conferences, and resources to grow your
                  skills.
                </p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4">
                <h3 className="mb-2 font-semibold">Impactful Work</h3>
                <p className="text-sm text-primary-foreground/80">
                  Work on diverse projects that make a real difference for
                  clients.
                </p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4">
                <h3 className="mb-2 font-semibold">Competitive Benefits</h3>
                <p className="text-sm text-primary-foreground/80">
                  Health insurance, paid time off, and performance bonuses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
