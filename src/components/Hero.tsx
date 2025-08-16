import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

interface HeroProps {
  name: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  objective: string;
  profileImage: string;
}

export const Hero = ({ name, location, email, github, linkedin, objective, profileImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 grid-background">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple p-1 pulse-glow">
              <div className="bg-background rounded-full p-2">
                <img
                  src={profileImage}
                  alt={`${name} profile`}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Name with glowing effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
          <span className="bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        {/* Subtitle with typing effect */}
        <div className="text-xl md:text-2xl mb-8 text-neon-cyan typewriter">
          Cybersecurity Professional & Developer
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
          <MapPin className="w-5 h-5 text-neon-green" />
          <span>{location}</span>
        </div>

        {/* Objective */}
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-foreground/90 leading-relaxed">
          {objective}
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="neon-border bg-transparent hover:bg-neon-cyan/10 border-neon-cyan text-neon-cyan"
          >
            <a href={`mailto:${email}`} className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="neon-border bg-transparent hover:bg-neon-purple/10 border-neon-purple text-neon-purple"
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="neon-border bg-transparent hover:bg-neon-green/10 border-neon-green text-neon-green"
          >
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};