import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Clock, Users, Code, Lightbulb, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = "https://forms.gle/4YBqdUdRyrpTx5EF8";

// Fixed ESLint Warning: Defined a proper type instead of 'any'
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  label: string;
  delay?: number;
}

const internships = [
  {
    title: "Graphic Designer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Work on real-world projects, learn best practices, and contribute to our visual branding across various channels.",
    skills: [
      "Canva",
      "Adobe Creative Suite",
      "Typography",
      "Layout Principles",
    ],
  },
  {
    title: "Frontend Developer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Join our team to build beautiful, intuitive, and high-performance user interfaces using React.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
  },
  {
    title: "Backend Developer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Assist in the design and maintenance of robust backend services and APIs.",
    skills: ["PostgreSQL", "MongoDB", "RESTful APIs", "Git"],
  },
  {
    title: "Full Stack Developer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Contribute to the development of new features across the entire stack.",
    skills: ["React", "Node.js", "SQL/NoSQL", "Git"],
  },
  {
    title: "SEO Specialist Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Optimize website content for search engines to improve organic rankings.",
    skills: ["SEO Principles", "Google Analytics", "Search Console"],
  },
  {
    title: "UI/UX Designer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Collaborate to design intuitive and user-friendly interfaces in Figma.",
    skills: ["Figma", "UX Principles", "Prototyping"],
  },
  {
    title: "Content Writer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Craft high-quality content for our blog, website, and social media platforms.",
    skills: ["Writing", "Research", "SEO Content"],
  },
];

const benefits = [
  "Hands-on experience with real projects",
  "Mentorship from experienced professionals",
  "Flexible remote work options",
  "Certificate of completion",
  "Potential for full-time conversion",
  "Networking opportunities",
  "Skill development workshops",
  "Portfolio building projects",
];

const Internship = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
        <div className="container-padding relative mx-auto max-w-7xl text-center">
          <motion.span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Internship Program
          </motion.span>
          <motion.h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Kickstart Your Career
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground">
            Gain valuable industry experience and work on impactful projects.
          </motion.p>
        </div>
      </section>

      {/* Program Overview Stats */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <StatCard icon={<Clock />} title="3-6 Months" label="Duration" />
            <StatCard
              icon={<Users />}
              title="1:5 Ratio"
              label="Mentorship"
              delay={0.1}
            />
            <StatCard
              icon={<Code />}
              title="Real Projects"
              label="Hands-on"
              delay={0.2}
            />
            <StatCard
              icon={<Lightbulb />}
              title="Skill Growth"
              label="Learning"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Available Internships */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Internships
          </h2>
          <div className="space-y-6">
            {internships.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.duration} •{" "}
                      <span className="text-accent">{job.type}</span>
                    </p>
                  </div>
                  <Button asChild variant="hero">
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Internship Benefits
              </h2>
              <p className="text-muted-foreground">
                Our program provides valuable experience to set you up for
                success in your professional journey.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Fixed explicit 'any' warning by using StatCardProps interface
const StatCard = ({ icon, title, label, delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="rounded-xl border border-border bg-card p-6 text-center"
  >
    <div className="mx-auto mb-3 h-8 w-8 text-accent">{icon}</div>
    <h3 className="font-semibold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{label}</p>
  </motion.div>
);

export default Internship;
