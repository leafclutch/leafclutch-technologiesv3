import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Lightbulb,
  Linkedin,
  Users,
  ArrowRight,
  Mail,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const teamMembers = [
  {
    name: "Pawan Chaudhary",
    role: "Technical & DevOps Head",
    linkedin: "https://www.linkedin.com/in/pawan-cdhry/",
    image: "https://i.postimg.cc/jdb4dkYK/pawan.jpg",
  },
  {
    name: "Shristi karki",
    role: "Social Media and Technical",
    linkedin: "https://www.linkedin.com/in/shristi-karki-388122391/",
    image: "https://i.postimg.cc/Kv2DvshM/shristi.png",
  },
  {
    name: "Bijay koirala",
    role: "consultant",
    linkedin: "https://www.linkedin.com/in/bijay-koirala-a98a0a260/",
    image: "https://i.postimg.cc/6q7L2D5y/bijay.jpg",
  },
  {
    name: "Siddhartha Pathak",
    role: "Data Science & AI",
    linkedin: "https://linkedin.com/in/siddharthapathak",
    image: "https://i.postimg.cc/jdb4dkY2/siddhartha.jpg",
  },
  {
    name: "Saurya Chaudhary",
    role: "Cyber security specialist",
    linkedin: "https://www.linkedin.com/in/saurya-chaudhary-ab680b243/",
    image: "https://i.postimg.cc/c4SB45G6/saurya.jpg",
  },
  {
    name: "Roshan Kumar Singh",
    role: "Backend & AI",
    linkedin: "https://www.linkedin.com/in/roshan-kumar-singh-60b68a253/",
    image: "https://i.postimg.cc/xjgPs3zD/roshan.jpg",
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
                technology and practical business needs, Leafclutch Technologies
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
                  <p className="text-4xl font-bold text-primary">5+</p>
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

      {/* Founders Section */}
      <div className="mt-20 bg-blue-100 rounded-2xl p-16 shadow-lg mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">Founders</h2>
        <p className="text-center text-muted-foreground mb-12">
          A dedicated group of AI engineers, developers, and automation
          specialists committed to transforming how businesses operate.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Siddhartha */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden">
              <img
                src="https://i.postimg.cc/jdb4dkY2/siddhartha.jpg"
                alt="Siddhartha Pathak"
                className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg object-cover"
              />
            </div>
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Siddhartha Pathak
              </h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
              <div className="flex justify-start gap-4 pt-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sid@leafclutch.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/siddharthapathak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://siddharthapathak.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Shubham */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden">
              <img
                src="https://i.postimg.cc/pdFmjRDx/shubham.jpg"
                alt="Shubham Kumar Deo"
                className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg object-cover"
              />
            </div>
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Shubham Kumar Deo
              </h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
              <div className="flex justify-start gap-4 pt-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shubham@leafclutch.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-kumar-deo-7048ab29b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Members Section */}
      <section className="section-padding container-padding mx-auto max-w-7xl">
        <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center pt-8">
          Our Team Members
        </h3>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-56 h-56 mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button - Centered Below the Grid */}
        <div className="flex justify-center mb-10 px-4">
          <Button
            asChild
            variant="highlight"
            size="lg"
            className="w-full max-w-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-bold border-2 border-highlight/50"
          >
            <Link to="/careers/intern-details">
              Our Intern Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
