import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

const resumeData = {
  name: "Gaourang Baria",
  location: "Jamnagar, Gujarat",
  email: "gaourang.baria22@st.niituniversity.in",
  github: "https://github.com/GBaria10",
  linkedin: "https://www.linkedin.com/in/gaourangbaria/",
  objective: "Aspiring cybersecurity professional with a strong foundation in security concepts, VAPT tools, networking, and web development. Passionate about learning emerging trends in cybersecurity, DevOps automation, and AI integration. Skilled in problem-solving and building effective solutions in the evolving tech landscape.",
  
  projects: [
    {
      title: "Kandeez Ransomware Simulator",
      description: [
        "Developed a malicious ransomware payload using Python and a web application using JavaScript.",
        "Created dashboard to monitor infected machines in simulation.",
        "Simulated ransomware attacks on Windows VM.",
        "Integrated into a DevOps pipeline with containerization, CI/CD, and automation.",
        "Built core workflows, backend APIs, and frontend integration for usability and performance."
      ]
    },
    {
      title: "Hospital Management System",
      description: [
        "Developed a Java-based GUI application with MySQL backend.",
        "Managed hospital operations such as patient registration, ICU/bed allocation, and doctor assignment.",
        "Designed ER diagram and built normalized database schema.",
        "Applied relational modeling and database concepts in a real-world scenario."
      ]
    },
    {
      title: "Ad-Free YouTube Multimedia Player",
      description: [
        "Developed a Python-based web application hosted on a free domain.",
        "Streamed videos and music from YouTube's database using YouTube API.",
        "Implemented filters to block advertisement redirections.",
        "Delivered an ad-free experience by analyzing and intercepting API request flows."
      ]
    }
  ],

  skills: {
    cybersecurity: [
      "Vulnerability Assessment & Penetration Testing",
      "SOC Analysis",
      "Network Devices Configuration (Cisco Packet Tracer)",
      "Linux Commands",
      "Forensics"
    ],
    programming_and_development: [
      "JavaScript",
      "React",
      "HTML",
      "Python",
      "Jenkins",
      "Docker Commands"
    ],
    version_control: [
      "Git",
      "GitHub"
    ]
  },

  certifications: [
    {
      title: "Play It Safe: Manage Security Risks",
      provider: "Google",
      description: "Threat, risk, and vulnerability identification; security frameworks and SIEM tools; playbook-driven incident response.",
      link: "https://coursera.org/share/f8c9d1623912d4f0d711634131918a86"
    },
    {
      title: "Foundations of Cybersecurity",
      provider: "Google",
      description: "Core skills of a cybersecurity analyst, security ethics, business impact of cyber attacks, and common tools.",
      link: "https://coursera.org/share/7b6b94e37ed9d46840e6c07e6872f367"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "NIIT University",
      duration: "2022 – 2026"
    },
    {
      degree: "XII",
      institution: "PV Modi School, Jamnagar (GSEB)",
      year: "2022"
    },
    {
      degree: "X",
      institution: "PV Modi School, Jamnagar (GSEB)",
      year: "2020"
    }
  ],

  positions: [
    {
      position: "Co-Coordinator",
      organization: "NuMarksmen Club, NIIT University",
      duration: "Jan 2025 – May 2025",
      description: [
        "Handled operations of the shooting range.",
        "Worked as Co-Coordinator of the Shooting Club.",
        "Acquired 2.5 years of Air-Pistol Shooting experience."
      ]
    }
  ],

  extraCurricular: [
    "Participant, Association of Indian Universities – Shooting Air Pistol All India Competition (Jan 2025)"
  ],

  additional: {
    languages: ["English", "Hindi", "Gujarati"],
    interests: ["Air-Pistol Shooting", "Kabbadi", "Gaming", "Trekking"]
  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero
        name={resumeData.name}
        location={resumeData.location}
        email={resumeData.email}
        github={resumeData.github}
        linkedin={resumeData.linkedin}
        objective={resumeData.objective}
        profileImage="/lovable-uploads/a97545f6-9353-4433-84fe-a292894c2e31.png"
      />
      
      <Skills skills={resumeData.skills} />
      
      <Projects projects={resumeData.projects} />
      
      <Education education={resumeData.education} />
      
      <Certifications certifications={resumeData.certifications} />
      
      <Experience 
        positions={resumeData.positions}
        extraCurricular={resumeData.extraCurricular}
      />
      
      <Footer 
        interests={resumeData.additional.interests}
        languages={resumeData.additional.languages}
      />
    </div>
  );
};

export default Index;
