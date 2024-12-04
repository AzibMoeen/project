"use client";

import { Button } from "../ui/button";
import { FileDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`py-20 bg-secondary/30 slide-up ${inView ? 'in-view' : ''}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get a detailed overview of my skills, experience, and achievements in my comprehensive resume.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
          <a href="/Resume.pdf" download>
            <FileDown className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Resume;