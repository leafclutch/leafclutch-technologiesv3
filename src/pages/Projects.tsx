import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// 🔥 IMPORTANT: Make sure your image files are in the following structure:
// /public/projectScreenshots/uespl.png
// /public/projectScreenshots/another-project.jpg (etc.)

// 1. Updated projects array to use 'imageName'
const projects = [
  {
    title: "USHA Engineering Services (P). Ltd.",
    category: "Company Portfolio",
    description:
      "Designed and developed the official corporate portfolio website for USHA Engineering Services (P). Ltd (UESPL), showcasing their consulting capabilities, services, projects, and company history.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    impact:
      "Provided a professional online presence that improves brand credibility, client engagement, and service accessibility.",
    challenge:
      "The client needed a clear and informative web presence to represent their wide range of engineering and consulting services effectively online.",
    solution:
      "Delivered a responsive, user-friendly website that highlights UESPL’s history, services, team expertise, and portfolio.",
    url: "https://www.uespl.com.np/about.html",
    // 🔥 Use the filename instead of a long URL
    imageName: "uespl.png",
  },
  {
    title: "The Classy POS & Order Management System",
    category: "Restaurant POS / Admin Dashboard",
    description:
      "Developed a custom, web-based Point-of-Sale (POS) and administration dashboard solution for The Classy Cafe. The system manages table ordering via QR codes, provides a real-time order monitoring dashboard, and enables manual order entry for staff.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS/Tailwind",
      "Supabase (Backend/Database)",
      "Responsive Web",
    ],
    impact:
      "Streamlined the entire ordering workflow, allowing guests to order instantly via QR code and enabling kitchen staff to manage, modify, and process orders, payments, and billing through a single integrated dashboard.",
    challenge:
      "The client required a flexible, low-cost solution to replace traditional paper menus and reduce staff overhead, while still providing robust administrative controls for order modifications, partial payments, and menu management.",
    solution:
      "Implemented a serverless, single-page application structure leveraging Supabase for database and authentication. Created a dedicated 'Table Selector' tool for quick staff-side manual order entry and a dynamic dashboard for comprehensive order control (including payment completion and item reduction/cancellation).",
    url: "https://the-classy.pages.dev/dashboard",
    // 🔥 Use the filename instead of a long URL
    imageName: "classyCafe.png",
  },
  // {
  //   title: "Siddhartha Pathak Personal Portfolio",
  //   category: "Personal Portfolio / Business Card Website",
  //   description:
  //     "Designed and developed a personal portfolio website for Siddhartha Pathak, a professional offering services in SEO, Web Analytics, Data Insights, and Web Development. The site serves as a professional online resume and a digital business card.",
  //   technologies: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Mobile-First/Responsive Design",
  //   ],
  //   impact:
  //     "Established a dedicated, professional online presence that clearly communicates the owner's expertise, services offered, and contact information, essential for personal branding and client acquisition.",
  //   challenge:
  //     "The goal was to create a clean, fast-loading, and easily navigable single-page website that effectively summarizes a diverse range of technical skills and services without overwhelming the visitor.",
  //   solution:
  //     "Delivered a highly optimized, responsive single-page design that uses clear headings and structured sections to present professional experience, skills, and services, ensuring high performance across all devices.",
  //   url: "https://siddharthapathak.com.np/",
  //   // 🔥 Use the filename instead of a long URL
  //   imageName: "sidPortfolio.png",
  // },
  // Add your 50+ other projects here, only needing the corresponding filename:
  // {
  //   title: "Example Project B",
  //   category: "E-commerce",
  //   // ... other properties ...
  //   imageName: "example-b.jpg",
  // },
];

// 2. Helper function to construct the public path dynamically
const getPublicPath = (filename) => {
  // This assumes the folder structure: /public/projectScreenshots/
  // Since 'public' content is served from the root ('/'), the path is relative to the root.
  return `/projectScreenshots/${filename}`;
};

const Projects = () => {
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
              Our Projects
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Success Stories That{" "}
              <span className="gradient-text">Inspire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground md:text-xl"
            >
              Explore our portfolio of successful projects and see how we've
              helped businesses achieve their goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="grid lg:grid-cols-5">
                  {/* 🔥 Website Preview */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group relative h-64 overflow-hidden lg:col-span-2 lg:h-auto"
                  >
                    <img
                      // 🔥 Construct the URL using the helper function and imageName
                      src={getPublicPath(project.imageName)}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400?text=Website+Preview";
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Category Badge */}
                    <div className="absolute left-4 top-4 z-10 rounded-lg bg-card/90 px-4 py-2 backdrop-blur">
                      <span className="text-sm font-medium text-accent">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white">
                        Visit Website <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.a>

                  {/* Content */}
                  <div className="p-6 lg:col-span-3 lg:p-8">
                    <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>

                    <p className="mb-4 text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="mb-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-1 text-sm font-semibold">
                          Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-semibold">Solution</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground">
                        Business Impact
                      </p>
                      <p className="font-semibold text-accent">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's discuss how we can help bring your vision to life.
          </p>

          <Button asChild variant="hero" size="lg">
            <Link to="/get-started">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
