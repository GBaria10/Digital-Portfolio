import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Terminal, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  
  const terminalLines = [
    `> sudo whoami`,
    `${name}`,
    `> cat /usr/local/bin/skills.txt`,
    `Cybersecurity Professional & Developer`,
    `> pwd`,
    `${location}`,
    `> echo $MISSION`,
    `"${objective}"`,
    `> ls -la /social/`,
    `drwxr-xr-x 3 ${name.toLowerCase().replace(' ', '')} users 4096 Jan 16 2025 ./`,
    `> ./connect.sh --ready`
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + terminalLines[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 500 : 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentLine, terminalLines]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 border border-neon-cyan rotate-45 animate-pulse" />
      <div className="absolute top-40 right-32 w-6 h-6 border border-neon-purple rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-neon-green animate-pulse delay-500" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Terminal Interface */}
          <div className="order-2 lg:order-1">
            <div className="bg-black/90 backdrop-blur-sm border border-neon-cyan/30 rounded-lg shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-neon-cyan/20 bg-gradient-to-r from-neon-cyan/10 to-transparent">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-neon-cyan text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>cybersec@terminal:~$</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[400px]">
                <pre className="text-neon-green whitespace-pre-wrap leading-relaxed">
                  {displayedText}
                </pre>
                {currentLine < terminalLines.length && (
                  <div className="flex items-center mt-2">
                    <ChevronRight className="w-4 h-4 text-neon-cyan mr-1" />
                    <div className="w-3 h-5 bg-neon-cyan animate-pulse"></div>
                  </div>
                )}
                
                {currentLine >= terminalLines.length && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <ChevronRight className="w-4 h-4" />
                      <span>Connection established. Ready for collaboration.</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="neon-border bg-transparent hover:bg-neon-cyan/10 border-neon-cyan text-neon-cyan font-mono text-xs"
                      >
                        <a href={`mailto:${email}`} className="flex items-center gap-2">
                          <Mail className="w-3 h-3" />
                          ./send_email.sh
                        </a>
                      </Button>
                      
                      <Button
                        asChild
                        variant="outline"
                        className="neon-border bg-transparent hover:bg-neon-purple/10 border-neon-purple text-neon-purple font-mono text-xs"
                      >
                        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="w-3 h-3" />
                          ./github.sh
                        </a>
                      </Button>
                      
                      <Button
                        asChild
                        variant="outline"
                        className="neon-border bg-transparent hover:bg-neon-green/10 border-neon-green text-neon-green font-mono text-xs"
                      >
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Linkedin className="w-3 h-3" />
                          ./linkedin.sh
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Profile Image with Holographic Frame */}
            <div className="relative mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Outer holographic ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green opacity-20 blur-lg animate-pulse"></div>
                
                {/* Inner frame */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple">
                  <div className="bg-background rounded-full p-2">
                    <img
                      src={profileImage}
                      alt={`${name} profile`}
                      className="w-40 h-40 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-neon-green rounded-full border-2 border-background animate-pulse">
                  <div className="w-full h-full bg-neon-green rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>

            {/* Identity Matrix */}
            <div className="space-y-6">
              <div className="border border-neon-cyan/30 bg-card/20 backdrop-blur-sm rounded-lg p-6">
                <h1 className="text-2xl font-bold text-neon-cyan mb-2 font-mono">
                  IDENTITY_MATRIX.exe
                </h1>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green">NAME:</span>
                    <span className="text-foreground">{name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green">LOCATION:</span>
                    <span className="text-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green">STATUS:</span>
                    <span className="text-neon-cyan">ONLINE • AVAILABLE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neon-green">CLEARANCE:</span>
                    <span className="text-neon-purple">LEVEL_7_CYBER_OPS</span>
                  </div>
                </div>
              </div>

              {/* System Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neon-purple/30 bg-card/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-neon-purple font-mono">99.9%</div>
                  <div className="text-xs text-muted-foreground font-mono">UPTIME</div>
                </div>
                <div className="border border-neon-green/30 bg-card/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-neon-green font-mono">24/7</div>
                  <div className="text-xs text-muted-foreground font-mono">MONITORING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};