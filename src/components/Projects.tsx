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

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neon-purple glow-text">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            
            return (
              <Card
                key={project.title}
                className="neon-border bg-card/50 backdrop-blur-sm hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-lg bg-muted/30 border border-muted group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
                    </div>
                    <Badge variant="outline" className="border-muted/50 text-muted-foreground group-hover:border-neon-cyan/50 group-hover:text-neon-cyan transition-all duration-300">
                      Project {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-neon-cyan mt-2 flex-shrink-0 transition-colors duration-300" />
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