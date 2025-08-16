import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration?: string;
  year?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-green opacity-50" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-neon-cyan rounded-full border-2 border-background pulse-glow" />
                
                <Card className="ml-16 neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-neon-cyan" />
                      <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                        {item.duration || item.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-neon-cyan">
                      {item.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{item.institution}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};