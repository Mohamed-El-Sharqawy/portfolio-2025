'use client';

import { useState } from 'react';
import { Code, Server, Database, Globe, Users, Zap } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 98 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript ES6+', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Redux/Zustand', level: 95 },
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Nest.js', level: 85 },
        { name: 'Express.js', level: 95 },
        { name: 'Fastify', level: 75 },
        { name: 'Hono', level: 70 },
        { name: 'Bun Runtime', level: 65 },
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 95 },
        { name: 'Redis', level: 65 },
        { name: 'Supabase', level: 70 },
        { name: 'Prisma ORM', level: 90 },
        { name: 'MySQL', level: 90},
      ]
    },
    devops: {
      icon: Globe,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 60 },
        { name: 'Docker', level: 50 },
        { name: 'Kubernetes', level: 20 },
        { name: 'CI/CD', level: 87 },
        { name: 'Vercel', level: 90 },
        { name: 'Linux', level: 85 },
      ]
    },
    management: {
      icon: Users,
      title: 'Project Management',
      skills: [
        { name: 'Agile/Scrum', level: 60 },
        { name: 'Team Leadership', level: 95 },
        { name: 'Strategic Planning', level: 88 },
        { name: 'Risk Management', level: 85 },
        { name: 'Stakeholder Management', level: 90 },
        { name: 'Budget Planning', level: 90 },
      ]
    },
    tools: {
      icon: Zap,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Slack', level: 80 },
        { name: 'Notion', level: 70 },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">Technical Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, cloud architecture, and project management
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white glow-effect'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="card-gradient rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                  <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}