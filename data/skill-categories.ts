import { Code, Server, Database, Globe, Users, Zap } from "lucide-react";

export const skillCategories = {
  frontend: {
    icon: Code,
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 98 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript ES6+", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux/Zustand", level: 95 },
    ],
  },
  backend: {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Nest.js", level: 85 },
      { name: "Express.js", level: 95 },
      { name: "Fastify", level: 75 },
      { name: "Hono", level: 70 },
      { name: "Bun Runtime", level: 65 },
    ],
  },
  database: {
    icon: Database,
    title: "Database & Storage",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 95 },
      { name: "Redis", level: 65 },
      { name: "Supabase", level: 70 },
      { name: "Prisma ORM", level: 90 },
      { name: "MySQL", level: 90 },
    ],
  },
  devops: {
    icon: Globe,
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 60 },
      { name: "Docker", level: 50 },
      { name: "Kubernetes", level: 20 },
      { name: "CI/CD", level: 87 },
      { name: "Vercel", level: 90 },
      { name: "Linux", level: 85 },
    ],
  },
  management: {
    icon: Users,
    title: "Project Management",
    skills: [
      { name: "Agile/Scrum", level: 60 },
      { name: "Team Leadership", level: 95 },
      { name: "Strategic Planning", level: 88 },
      { name: "Risk Management", level: 85 },
      { name: "Stakeholder Management", level: 90 },
      { name: "Budget Planning", level: 90 },
    ],
  },
  tools: {
    icon: Zap,
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Jira", level: 85 },
      { name: "Slack", level: 80 },
      { name: "Notion", level: 70 },
    ],
  },
};
