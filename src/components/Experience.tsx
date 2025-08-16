import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target } from "lucide-react";

interface Position {
  position: string;
  organization: string;
  duration: string;
  description: string[];
}

interface ExperienceProps {
  positions: Position[];
  extraCurricular: string[];
}

export const Experience = ({ positions, extraCurricular }: ExperienceProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Experience & Activities
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Positions of Responsibility */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6" />
              Leadership Roles
            </h3>
            
            {positions.map((position, index) => (
              <Card
                key={index}
                className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                      {position.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-neon-cyan">
                    {position.position}
                  </CardTitle>
                  <p className="text-muted-foreground">{position.organization}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {position.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Extra Curricular Activities */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-purple mb-6 flex items-center gap-3">
              <Target className="w-6 h-6" />
              Achievements
            </h3>
            
            <Card className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-neon-purple">
                  Extra Curricular Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {extraCurricular.map((activity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};