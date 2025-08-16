import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  provider: string;
  description: string;
  link: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-neon-pink/20 border border-neon-pink/30">
                    <Award className="w-5 h-5 text-neon-pink" />
                  </div>
                  <Badge variant="outline" className="border-neon-pink/50 text-neon-pink">
                    {cert.provider}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-neon-pink">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {cert.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="neon-border bg-transparent hover:bg-neon-pink/10 border-neon-pink text-neon-pink w-full"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};