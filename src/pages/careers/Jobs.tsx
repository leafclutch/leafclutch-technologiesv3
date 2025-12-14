import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description:
      "Lead development of complex software solutions, mentor junior developers, and contribute to architectural decisions.",
    requirements: [
      "5+ years of software development experience",
      "Proficiency in Python, Java, or TypeScript",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong problem-solving skills",
      "Excellent communication abilities",
    ],
  },
  {
    title: "AI/ML Engineer",
    department: "AI Team",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $150,000",
    description:
      "Design and implement machine learning models, work on cutting-edge AI projects, and drive innovation in our AI solutions.",
    requirements: [
      "3+ years of ML/AI experience",
      "Strong Python skills with TensorFlow or PyTorch",
      "Experience with NLP or computer vision",
      "Understanding of MLOps practices",
      "PhD or Master's preferred",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description:
      "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure high availability of our systems.",
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of Docker and Kubernetes",
      "Experience with Terraform or Ansible",
      "CI/CD pipeline expertise",
      "Security best practices knowledge",
    ],
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    salary: "$70,000 - $100,000",
    description:
      "Create beautiful, responsive user interfaces with React and TypeScript, collaborating with designers and backend teams.",
    requirements: [
      "3+ years of React experience",
      "Strong TypeScript skills",
      "Experience with modern CSS frameworks",
      "Eye for design and UX",
      "Testing experience (Jest, Cypress)",
    ],
  },
  {
    title: "Data Analyst",
    department: "Data Team",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $90,000",
    description:
      "Analyze complex datasets, create visualizations, and provide actionable insights to drive business decisions.",
    requirements: [
      "2+ years of data analysis experience",
      "Proficiency in SQL and Python",
      "Experience with BI tools (Power BI, Tableau)",
      "Statistical analysis skills",
      "Strong communication abilities",
    ],
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Remote / Hybrid",
    type: "Full-time",
    salary: "$75,000 - $110,000",
    description:
      "Lead project teams, ensure timely delivery, and maintain strong client relationships throughout project lifecycles.",
    requirements: [
      "4+ years of project management experience",
      "PMP or similar certification preferred",
      "Experience with agile methodologies",
      "Technical background preferred",
      "Excellent stakeholder management",
    ],
  },
];

const Jobs = () => {
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
              Open Positions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            >
              Jobs at LeafClutch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Find your next opportunity with our growing team of talented
              professionals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-5xl">
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Button asChild variant="hero">
                      <Link to="/get-started">Apply Now</Link>
                    </Button>
                  </div>
                  <p className="mb-4 text-muted-foreground">{job.description}</p>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">
                      Requirements:
                    </h4>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Don't See the Right Fit?
          </h2>
          <p className="mb-6 text-muted-foreground">
            We're always looking for talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <Button asChild variant="default" size="lg">
            <Link to="/get-started">
              Send Your Resume
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
