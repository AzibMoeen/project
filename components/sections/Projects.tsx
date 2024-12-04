"use client";

import { Badge } from "../ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory and Stripe payments",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=450",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "Chat app with real-time messaging sharing using Appwrite",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&h=450",
    tech: ["React", "Appwrite", "Socket.io", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Instagram Clone",
    description: "Full-featured Instagram clone with real-time updates and image sharing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=450",
    tech: ["MERN Stack", "Socket.io", "AWS S3", "Redux"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Legal Document Analyzer",
    description: "AI-powered tool for analyzing legal documents using NLP",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=450",
    tech: ["Next.js", "OpenAI", "Vector DB", "Clerk"],
    github: "#",
    demo: "#",
  },
];

const ProjectCard = ({ project}:any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden rounded-xl group slide-up ${inView ? 'in-view' : ''}`}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="project-image group-hover:scale-105"
      />
      <div className="project-overlay group-hover:opacity-100">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech:any) => (
            <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Button size="sm" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;