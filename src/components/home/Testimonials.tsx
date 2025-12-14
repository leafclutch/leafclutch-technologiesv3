import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    content:
      "LeafClutch transformed our legacy systems with their innovative AI solutions. The team's expertise and dedication to quality exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, StartupXYZ",
    content:
      "Working with LeafClutch was a game-changer for our startup. They delivered a scalable platform that has grown with us from day one.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Operations Director, Global Corp",
    content:
      "The automation solutions provided by LeafClutch saved us countless hours and significantly reduced operational costs. Highly recommended.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-padding mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-highlight"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80"
          >
            Don't just take our word for it. Here's what businesses like yours
            have experienced working with LeafClutch.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-highlight" />
              <p className="mb-6 text-primary-foreground/90">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-highlight text-lg font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-highlight text-highlight"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
