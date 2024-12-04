"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={ref}
    >
      <div className="space-y-8">
        <motion.div className="space-y-2" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Azib Moeen
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold">
            Full Stack Developer
          </h2>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-accent text-3xl md:text-5xl font-bold"
            >
              MERN & Next.js Expert
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl"
          variants={itemVariants}
        >
          Specialized in building robust web applications using MERN Stack and Next.js.
          Passionate about AI integration and creating innovative solutions.
          Experience in developing e-commerce platforms, real-time applications,
          and AI-powered tools.
        </motion.p>

        <motion.div className="flex gap-4" variants={itemVariants}>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>

        <motion.div 
          className="flex gap-4"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="azibmaher771@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;