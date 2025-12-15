import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Clock, Users, Code, Lightbulb, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const internships = [
  {
    title: "Software Development Intern",
    duration: "3-6 months",
    type: "Paid",
    description:
      "Work on real-world projects, learn best practices, and contribute to production codebases.",
    skills: ["Python/JavaScript", "Git", "Basic web development", "Problem-solving"],
  },
  {
    title: "AI/ML Research Intern",
    duration: "3-6 months",
    type: "Paid",
    description:
      "Assist in developing and training machine learning models for various applications.",
    skills: ["Python", "TensorFlow/PyTorch basics", "Statistics", "Data analysis"],
  },
  {
    title: "Data Analytics Intern",
    duration: "3-6 months",
    type: "Paid/Unpaid",
    description:
      "Analyze datasets, create visualizations, and contribute to business intelligence projects.",
    skills: ["SQL", "Excel/Sheets", "Python/R basics", "Data visualization"],
  },
  {
    title: "DevOps Intern",
    duration: "3-6 months",
    type: "Paid",
    description:
      "Learn cloud infrastructure, CI/CD pipelines, and automation practices.",
    skills: ["Linux basics", "Docker awareness", "Scripting", "Cloud fundamentals"],
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
        <div className="container-padding relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Internship Program
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            >
              Kickstart Your Career
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Gain valuable industry experience, work on impactful projects, and
              learn from experienced mentors.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Clock className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">3-6 Months</h3>
              <p className="text-sm text-muted-foreground">Program Duration</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Users className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">1:5 Ratio</h3>
              <p className="text-sm text-muted-foreground">Mentor to Intern</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Code className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">Real Projects</h3>
              <p className="text-sm text-muted-foreground">Hands-on Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <Lightbulb className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold text-foreground">Skill Growth</h3>
              <p className="text-sm text-muted-foreground">Continuous Learning</p>
            </motion.div>
          </div>
        </div>
      </section>

              {/* intern team */}
              <div className="flex justify-center mb-20">
                <a href="http://localhost:8080/careers/interndetails" target="_blank">
               <button className="inline-flex items-center justify-center gap-1 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-highlight text-primary shadow-lg hover:shadow-xl hover:-translate-y-1 font-bold border-2 border-highlight/50 h-12 rounded-lg px-8  text-base w-full">
                Our Intern Team
                </button>
                </a>
              </div>

      {/* Available Internships */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Available Internships
            </h2>
          </div>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {internship.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {internship.duration}
                      </span>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                          internship.type === "Paid"
                            ? "bg-accent/20 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {internship.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild variant="hero">
                    <Link to="/get-started">Apply Now</Link>
                  </Button>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {internship.description}
                </p>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    Required Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Internship Benefits
              </h2>
              <p className="text-muted-foreground">
                Our internship program is designed to provide you with valuable
                experience and set you up for success in your tech career.
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
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Apply today and take the first step towards a rewarding tech career.
          </p>
          <Button
            asChild
            variant="highlight"
            size="lg"
            className="bg-highlight text-primary hover:bg-highlight/90"
          >
            <Link to="/get-started">
              Apply for Internship
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Internship;
