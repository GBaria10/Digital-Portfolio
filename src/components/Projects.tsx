import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Database, Video } from "lucide-react";

interface Project {
  title: string;
  description: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  const projectIcons = [Terminal, Database, Video];
  const projectColors = ["neon-cyan", "neon-purple", "neon-green"];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            const color = projectColors[index % projectColors.length];
            
            return (
              <Card
                key={project.title}
                className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 holographic"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-2 rounded-lg bg-${color}/20 border border-${color}/30`}>
                      <IconComponent className={`w-5 h-5 text-${color}`} />
                    </div>
                    <Badge variant="outline" className={`border-${color}/50 text-${color}`}>
                      Project {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className={`text-xl font-bold text-${color}`}>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-${color} mt-2 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};