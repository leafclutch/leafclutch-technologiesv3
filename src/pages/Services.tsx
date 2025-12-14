import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Bot,
  BarChart3,
  Cloud,
  GraduationCap,
  Database,
  Workflow,
  MessageSquare,
  Shield,
  Server,
} from "lucide-react";

const services = [
  {
    id: "software",
    icon: Code,
    title: "Software Services",
    description:
      "Custom software solutions tailored to your unique business requirements.",
    features: [
      {
        title: "Custom Software Development",
        description:
          "Bespoke applications designed from scratch to solve your specific challenges.",
      },
      {
        title: "Backend Systems & APIs",
        description:
          "Robust, scalable backend architectures and RESTful APIs for seamless integration.",
      },
      {
        title: "Scalable Enterprise Solutions",
        description:
          "Enterprise-grade systems built to handle growing demands and complex workflows.",
      },
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description:
      "Modern web solutions that combine stunning design with powerful functionality.",
    features: [
      {
        title: "Responsive Websites",
        description:
          "Beautiful, mobile-first websites that look perfect on every device.",
      },
      {
        title: "Web Applications",
        description:
          "Feature-rich web apps with intuitive interfaces and seamless user experiences.",
      },
      {
        title: "Dashboards & Admin Panels",
        description:
          "Data-driven dashboards for real-time insights and efficient management.",
      },
    ],
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      {
        title: "Android & iOS Apps",
        description:
          "Native applications optimized for each platform's unique capabilities.",
      },
      {
        title: "Cross-Platform Solutions",
        description:
          "Build once, deploy everywhere with React Native and Flutter.",
      },
      {
        title: "Performance-Focused Development",
        description:
          "Fast, responsive apps optimized for the best user experience.",
      },
    ],
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent solutions that transform operations and enhance decision-making.",
    features: [
      {
        title: "AI-Powered Business Solutions",
        description:
          "Machine learning models and AI systems tailored to your business needs.",
      },
      {
        title: "Workflow Automation",
        description:
          "Streamline repetitive tasks and boost productivity with smart automation.",
      },
      {
        title: "n8n Automation Pipelines",
        description:
          "Complex workflow automation with visual, no-code integration tools.",
      },
      {
        title: "Chatbots & Intelligent Systems",
        description:
          "Conversational AI and intelligent assistants for customer engagement.",
      },
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data Analysis Services",
    description:
      "Transform raw data into actionable insights that drive business growth.",
    features: [
      {
        title: "Data Cleaning & Preprocessing",
        description:
          "Prepare and structure your data for accurate analysis and modeling.",
      },
      {
        title: "Dashboards & Data Visualization",
        description:
          "Interactive visualizations that make complex data easy to understand.",
      },
      {
        title: "Business Intelligence & Insights",
        description:
          "Deep analytical insights to inform strategy and decision-making.",
      },
    ],
  },
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps & Private Cloud",
    description:
      "Secure, scalable infrastructure solutions for modern enterprises.",
    features: [
      {
        title: "Local/Private Cloud Setup",
        description:
          "Custom cloud infrastructure tailored to your security and compliance needs.",
      },
      {
        title: "Nextcloud Deployment",
        description:
          "Self-hosted collaboration platforms for secure file sharing and communication.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated deployment pipelines for faster, reliable software delivery.",
      },
      {
        title: "Secure Infrastructure & Monitoring",
        description:
          "24/7 monitoring and security best practices to protect your systems.",
      },
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Internship Programs",
    description:
      "Industry-focused education and hands-on experience for aspiring technologists.",
    features: [
      {
        title: "Industry-Focused Learning",
        description:
          "Curriculum designed with real-world applications and industry standards.",
      },
      {
        title: "Career Mentorship",
        description:
          "Guidance from experienced professionals to accelerate your career growth.",
      },
      {
        title: "Comprehensive Courses",
        description:
          "Data Science, AI, Software Development, DSA, C++, and more.",
      },
    ],
  },
];

const Services = () => {
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
            >
              End-to-End Technology{" "}
              <span className="gradient-text">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              From concept to deployment, we provide comprehensive technology
              services that transform your business and drive measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${
            index % 2 === 0 ? "bg-background" : "bg-muted/50"
          }`}
        >
          <div className="container-padding mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  {service.title}
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {service.features.map((feature, fIndex) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md"
                  >
                    <h3 className="mb-2 font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Services;
