import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Linkedin,
} from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";

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

      {/* Team Section */}
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
                src="https://media.licdn.com/dms/image/v2/D5603AQGk44uYODSrgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722535962639?e=1766620800&v=beta&t=BsUpPDxiQU_ovOu7pCl3fGFolXfzRJgSISESpd3jGLQ"
                alt="photo"
                className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg"
              />
            </div>
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Siddhartha Pathak
              </h3>
              <p className="text-gray-600"> Co - Founder & CTO</p>
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

          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFO2cEDbK8ZEg/profile-displayphoto-scale_400_400/B4DZoy66_HIkAg-/0/1761790900415?e=1766620800&v=beta&t=Nrqznr0p9Y_9TPtxiyYul2OPy-0cvgI6CZXTLscAvnI"
                alt="photo"
                className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg"
              />
            </div>
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Shubham Kurmar Deo
              </h3>
              <p className="text-gray-600"> Co - Founder & CEO</p>
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

      {/*our team*/}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center pt-8">
          {" "}
          Our Team Members
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEaaMc8rBUQAw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727595570674?e=1767225600&v=beta&t=D0BdvqYjA4wRimhpPF3RFy2XXAWAsGEwroni_dO00DY"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Pawan Chaudhary
              </h3>
              <p className="text-gray-600 mb-2">Technical & DevOps Head</p>
              <a
                href="https://www.linkedin.com/in/pawan-cdhry/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFeJUfaYD1o7Q/profile-displayphoto-scale_400_400/B56ZpI_5FCIsAg-/0/1762161302172?e=1767225600&v=beta&t=FAailMtXwsUCEB3fL9czUilB0aJCBIisuIcbH9mg6NU"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Shristi karki
              </h3>
              <p className="text-gray-600 mb-2">Social Media and Technical</p>
              <a
                href="https://www.linkedin.com/in/shristi-karki-388122391/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEMm5dto6hxRQ/profile-displayphoto-scale_400_400/B56Zi8N8_BG0Ak-/0/1755504432211?e=1767225600&v=beta&t=D4mkfjw-PQG7EQB4Y-OJBdfzyLp9yZL5bUFZY0uOC2A"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Bijay koirala
              </h3>
              <p className="text-gray-600 mb-2">Marketing Head</p>
              <a
                href="https://www.linkedin.com/in/bijay-koirala-a98a0a260/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGk44uYODSrgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722535962639?e=1766620800&v=beta&t=BsUpPDxiQU_ovOu7pCl3fGFolXfzRJgSISESpd3jGLQ"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Siddhartha Pathak
              </h3>
              <p className="text-gray-600 mb-2">Data Science & AI</p>
              <a
                href="https://linkedin.com/in/siddharthapathak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQF7ZXfkfPDFnw/profile-displayphoto-scale_400_400/B4EZjXSWgWHEAo-/0/1755958569752?e=1766620800&v=beta&t=r0CgsBJ83gvi26gPXPQx2hnYKEt94hjPZXiq-WXyGz4"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Michael Wacht
              </h3>
              <p className="text-gray-600 mb-2">AI Partner Incubator Manager</p>
              <a
                href="https://www.linkedin.com/in/mwacht/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div> */}

          {/* <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHKGBO2ZX9Hug/profile-displayphoto-scale_400_400/B56ZmoMDWgG0Ak-/0/1759463364586?e=1766620800&v=beta&t=JJ5sQfeQ1ncLQ500PC4F79HEt6qiHLLCG49FN-ew9Mc"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Guatami sinde
              </h3>
              <p className="text-gray-600 mb-2">AI Engineer</p>
              <a
                href="https://www.linkedin.com/in/geeshinde/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div> */}

          {/* <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQGN7C5j017TeQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1660803242560?e=1766620800&v=beta&t=3I-NG7j0Qzb5BHOKUDQt4Grze29k-wMuxEoLQ6IZJ3A"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Jason</h3>
              <p className="text-gray-600 mb-2">
                Vice President of Engineering
              </p>
              <a
                href="https://www.linkedin.com/in/jason-p-guest/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div> */}

          {/* <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 mb-6 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGNdzSiD9FSCg/profile-displayphoto-scale_400_400/B4DZnr5KRwIEAg-/0/1760599256830?e=1766620800&v=beta&t=eqmdOWYEOgUr8dXWfD6bxHPXFo2-quclAxf4hwD82cs"
                alt="member"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Maalik baksin
              </h3>
              <p className="text-gray-600 mb-2">AI Engineer</p>
              <a
                href="https://www.linkedin.com/in/mallika-bakshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div> */}
        </div>
      </div>

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
