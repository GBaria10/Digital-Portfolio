import { Heart } from "lucide-react";

interface FooterProps {
  interests: string[];
  languages: string[];
}

export const Footer = ({ interests, languages }: FooterProps) => {
  return (
    <footer className="py-16 px-6 border-t border-neon-cyan/20 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Interests */}
          <div>
            <h3 className="text-xl font-bold text-neon-green mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-full text-sm text-neon-green"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-neon-purple mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-sm text-neon-purple"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-muted/20">
          <p className="text-muted-foreground text-sm">
            © 2025 Gaourang Baria. Built with{" "}
            <span className="text-neon-cyan">React</span> &{" "}
            <span className="text-neon-purple">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};