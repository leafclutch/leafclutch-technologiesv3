import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import qr from "@/assets/qr.png";
const GetStarted = () => {
  const { toast } = useToast();
  // 1. UPDATED STATE: Removed 'budget' field to match old logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    // budget: "", // Removed
    message: "",
  });

  // 2. UPDATED SUBMIT HANDLER: Implements the mailto: link logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // DETERMINE RECIPIENT EMAIL and SUBJECT based on the selected service
    let recipient = "info@leafclutch.dev";
    let subject = "New Project Inquiry";

    // Assuming 'training' or 'other' services are career/general-related
    if (formData.service === "training" || formData.service === "other") {
      recipient = "careers@leafclutch.dev";
      subject = "Internship / Career / General Inquiry";
    }

    // CONSTRUCT THE EMAIL BODY from form data
    const body = encodeURIComponent(
      `Hello Leafclutch Team,\n\n` +
        `My name is ${formData.name} and I am reaching out regarding a new project/inquiry.\n\n` +
        `--- Details ---\n` +
        `Full Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || "N/A"}\n` +
        `Phone: ${formData.phone || "N/A"}\n` +
        `Service Interested In: ${formData.service || "Not Selected"}\n\n` +
        `Project Details:\n${formData.message}\n\n` +
        `I look forward to hearing from you.\n\n` +
        `Sincerely,\n${formData.name}`
    );

    // BUILD THE MAILTO LINK
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // OPEN THE USER'S EMAIL CLIENT
    window.location.href = mailtoLink;

    // Provide Feedback to the user
    toast({
      title: "Redirecting to Mail Client... 📤",
      description:
        "Please check your mail application (like Gmail) to finalize and send your message.",
    });

    // Clear the form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get Started
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            >
              Let's Build Something Great Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Tell us about your project and we'll get back to you with a free
              consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels and we'll
                  respond promptly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@leafclutch.dev</p>
                    <p className="text-muted-foreground">
                      support@leafclutch.dev
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {/* Phone block was commented out, leaving it out to maintain original structure */}
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Bhairahawa
                      <br />
                      Rupandehi, Nepal 🇳🇵
                    </p>
                  </div>
                </div>
                 <h3 className="font-semibold text-foreground text-center pt-2">Discord QR</h3>
                 <div className="flex items-start gap=4">

                    <img
                    src={qr}
                    alt="QR Code"
                    className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-lg shadow-md"
                    />
               </div>
              </div>

              {/* Quick Actions */}
              {/* <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Live Chat Support
                </Button>
              </div> */}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Service Interested In (Full width) */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Development</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="ai">AI & Automation</option>
                      <option value="data">Data Analysis</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="training">Training & Internship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Removed the 'Estimated Budget' select box, as the new logic doesn't use it. 
                      This keeps the form consistent with the new state. */}

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Consultation */}
      {/* <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get a Free Consultation
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            Not sure where to start? Our experts will help you identify the best
            solutions for your business needs.
          </p>
          <div className="inline-flex items-center gap-4 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
            <Calendar className="h-8 w-8 text-highlight" />
            <div className="text-left">
              <p className="font-semibold">30-Minute Strategy Call</p>
              <p className="text-sm text-primary-foreground/70">
                Free, no obligation consultation
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default GetStarted;
