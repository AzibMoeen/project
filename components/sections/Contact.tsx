"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5" />
              <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-foreground">
                azibmaher771@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-5 w-5" />
              <span className="text-muted-foreground">Available for freelance work</span>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/AzibMoeen" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/azib-moeen" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <button >
            <CardTitle >Send a Message</CardTitle></button>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input placeholder="Your Name"
                name="name"
                onChange={(e)=>{handleChange(e)}} />
              </div>
              <div>
                <Input type="email" placeholder="Your Email"
                name="email"
                onChange={(e)=>{handleChange(e)}} />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[120px]"
                name="message"
                onChange={(e)=>{handleChange(e)}}/>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;