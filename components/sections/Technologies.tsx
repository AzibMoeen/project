"use client";

import { Card } from "../ui/card";
import { Database, Globe, Server, Cpu } from "lucide-react";

const technologies = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Appwrite"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: ["Vector Databases", "RAG Systems", "LangChain", "OpenAI API"],
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Technologies & Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <Card key={tech.title} className="p-6">
            <tech.icon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
            <ul className="space-y-2">
              {tech.skills.map((skill) => (
                <li key={skill} className="text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Technologies;