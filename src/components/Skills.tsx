import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, GitBranch } from "lucide-react";

interface SkillsProps {
  skills: {
    cybersecurity: string[];
    programming_and_development: string[];
    version_control: string[];
  };
}

export const Skills = ({ skills }: SkillsProps) => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      skills: skills.cybersecurity,
      icon: Shield,
      color: "neon-cyan",
      bgColor: "bg-neon-cyan/5"
    },
    {
      title: "Programming & Development",
      skills: skills.programming_and_development,
      icon: Code,
      color: "neon-green",
      bgColor: "bg-neon-green/5"
    },
    {
      title: "Version Control",
      skills: skills.version_control,
      icon: GitBranch,
      color: "neon-purple",
      bgColor: "bg-neon-purple/5"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className={`neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 ${category.bgColor}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-${category.color}/20 border border-${category.color}/30`}>
                      <IconComponent className={`w-6 h-6 text-${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className={`text-xl font-bold text-${category.color}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`border-${category.color}/30 text-${category.color} bg-${category.color}/10 hover:bg-${category.color}/20 transition-colors`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};