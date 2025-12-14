import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Client-First Engineering",
    description:
      "We prioritize understanding your unique challenges and crafting solutions that truly address your needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description:
      "We embrace cutting-edge technologies while ensuring they serve practical business objectives.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Every line of code, every solution we deliver meets the highest standards of quality and reliability.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work alongside your team, fostering transparency and open communication throughout every project.",
  },
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
            >
              Building the Future of{" "}
              <span className="gradient-text">Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              Leafclutch Technologies is a forward-thinking software company
              dedicated to empowering businesses with intelligent solutions that
              drive growth and innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Who We Are
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                A Team of Passionate Technologists
              </h2>
              <p className="mb-4 text-muted-foreground">
                Founded with a vision to bridge the gap between cutting-edge
                technology and practical business needs, LeafClutch Technologies
                has grown into a trusted partner for organizations worldwide.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our diverse team brings together expertise in software
                engineering, artificial intelligence, data science, and cloud
                infrastructure. We combine technical excellence with deep
                industry knowledge to deliver solutions that create real value.
              </p>
              <p className="text-muted-foreground">
                From startups seeking their first product to enterprises
                modernizing legacy systems, we've helped organizations of all
                sizes achieve their digital transformation goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">5+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">2</p>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent, scalable, and
                responsible technology solutions that drive measurable growth
                and competitive advantage. We are committed to delivering
                excellence through innovation, collaboration, and unwavering
                dedication to our clients' success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the global leader in ethical AI and software solutions,
                recognized for our commitment to innovation, quality, and
                positive societal impact. We envision a world where technology
                serves as a catalyst for sustainable business growth and human
                progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Our Values
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-highlight"
            >
              Our Commitment
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Responsible AI Development
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80"
            >
              We believe in developing AI solutions that are transparent, fair,
              and beneficial to all stakeholders. Our approach prioritizes
              ethical considerations, data privacy, and accountability at every
              stage of development. We're committed to building AI that augments
              human capabilities rather than replacing human judgment.
            </motion.p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
