import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Clock,
  Users,
  Award,
  ArrowRight,
  Check,
  BookOpen,
  Code,
  Brain,
  Database,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: Brain,
    title: "Data Science",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description:
      "Master data analysis, machine learning, and visualization with Python.",
    topics: [
      "Python for Data Science",
      "Statistics & Probability",
      "Machine Learning",
      "Data Visualization",
      "Real-world Projects",
    ],
  },
  {
    icon: Code,
    title: "Artificial Intelligence",
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    description:
      "Deep dive into neural networks, NLP, computer vision, and AI applications.",
    topics: [
      "Deep Learning Fundamentals",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics & Applications",
    ],
  },
  {
    icon: Terminal,
    title: "Software Development",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    description:
      "Full-stack development with modern frameworks and best practices.",
    topics: [
      "Frontend (React/TypeScript)",
      "Backend (Node.js/Python)",
      "Database Design",
      "API Development",
      "Deployment & DevOps",
    ],
  },
  {
    icon: Database,
    title: "Data Structures & Algorithms",
    duration: "8 weeks",
    level: "All Levels",
    description:
      "Essential CS concepts for coding interviews and efficient problem-solving.",
    topics: [
      "Arrays & Strings",
      "Trees & Graphs",
      "Dynamic Programming",
      "System Design Basics",
      "Interview Preparation",
    ],
  },
  {
    icon: Code,
    title: "C++ Programming",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    description:
      "Learn C++ from fundamentals to object-oriented programming and STL.",
    topics: [
      "C++ Fundamentals",
      "Object-Oriented Programming",
      "Standard Template Library",
      "Memory Management",
      "Competitive Programming",
    ],
  },
  {
    icon: BookOpen,
    title: "More Courses",
    duration: "Varies",
    level: "All Levels",
    description:
      "Additional programs in web development, cloud computing, and more.",
    topics: [
      "Web Development Bootcamp",
      "Cloud Computing (AWS/GCP)",
      "DevOps Fundamentals",
      "Cybersecurity Basics",
      "Mobile App Development",
    ],
  },
];

const benefits = [
  "Industry-focused curriculum",
  "Hands-on project experience",
  "1-on-1 mentorship sessions",
  "Career guidance & job support",
  "Certificate of completion",
  "Access to alumni network",
  "Flexible learning schedule",
  "Real-world case studies",
];

const Training = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
        <div className="container-padding relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Training Programs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            >
              Learn. Build. Grow.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Industry-focused training programs designed to equip you with
              in-demand skills and accelerate your tech career.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <GraduationCap className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">Expert-Led</h3>
              <p className="text-sm text-muted-foreground">
                Learn from industry professionals
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Clock className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">Flexible Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Learn at your own pace
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Users className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">Mentorship</h3>
              <p className="text-sm text-muted-foreground">
                1-on-1 guidance & support
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Award className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">Certification</h3>
              <p className="text-sm text-muted-foreground">
                Industry-recognized credentials
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Our Courses
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Training Programs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-highlight/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/20">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {course.title}
                </h3>
                <div className="mb-3 flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span>{course.level}</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {course.description}
                </p>
                <div className="space-y-2">
                  {course.topics.slice(0, 4).map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {topic}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Why Choose Us
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Program Benefits
              </h2>
              <p className="text-muted-foreground">
                Our programs are designed to give you the skills, experience, and
                confidence you need to succeed in the tech industry.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start Your Learning Journey Today
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Enroll now and take the first step towards a successful tech career.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              variant="highlight"
              size="lg"
              className="bg-highlight text-primary hover:bg-highlight/90"
            >
              <Link to="/get-started">
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="hero-outline"
              size="lg"
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
