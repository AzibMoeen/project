"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="h-8 w-8" />
            <div>
              <CardTitle>Bachelor of Technology in Computer Science</CardTitle>
              <CardDescription>
                University of Punjab • 2021 - 2025
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        
      </div>
    </section>
  );
};

export default Education;