import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Customer Service Platform",
    category: "AI & Automation",
    description:
      "Built an intelligent chatbot system that reduced customer support costs by 40% while improving response times.",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    impact: "40% cost reduction",
  },
  {
    title: "Enterprise Resource Planning System",
    category: "Software Development",
    description:
      "Developed a comprehensive ERP solution for a manufacturing company, streamlining operations across departments.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular"],
    impact: "60% efficiency gain",
  },
  {
    title: "E-Commerce Analytics Dashboard",
    category: "Data Analysis",
    description:
      "Created real-time analytics dashboard providing actionable insights for business decision-making.",
    technologies: ["Python", "Power BI", "AWS", "React"],
    impact: "25% revenue increase",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground md:text-4xl"
            >
              Featured Projects
            </motion.h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-xl"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg bg-card/80 px-4 py-2 backdrop-blur-sm">
                    <span className="text-sm font-medium text-accent">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Business Impact</p>
                    <p className="font-semibold text-accent">{project.impact}</p>
                  </div>
                  <Link
                    to="/projects"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
