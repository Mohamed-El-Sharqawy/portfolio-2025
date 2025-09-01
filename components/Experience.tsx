'use client';

import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Frontend Engineer & Team Lead',
      company: 'Tech Innovation Hub',
      location: 'United Arab Emirates',
      period: '2022 - Present',
      type: 'Technical Leadership',
      description: 'Leading a team of 12 frontend engineers in developing next-generation government digital services. Architected and delivered 5 major applications serving over 2 million citizens.',
      achievements: [
        'Reduced application load times by 60% through advanced optimization',
        'Implemented micro-frontend architecture serving 8 government departments',
        'Mentored 15+ junior developers and established coding standards'
      ]
    },
    {
      role: 'Senior Full-Stack Engineer',
      company: 'Digital Solutions Corp',
      location: 'Saudi Arabia',
      period: '2021 - 2022',
      type: 'Technical Leadership',
      description: 'Spearheaded the development of enterprise-grade healthcare management systems using React.js, Next.js, and Node.js. Led technical architecture decisions for 3 major projects.',
      achievements: [
        'Delivered healthcare platform serving 500K+ patients',
        'Implemented real-time data synchronization across 12 hospitals',
        'Achieved 99.9% uptime through robust architecture design'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'American Tech Solutions',
      location: 'United States',
      period: '2020 - 2021',
      type: 'Technical Leadership',
      description: 'Led frontend development for fintech applications handling millions in transactions. Worked with React.js, TypeScript, and modern backend APIs.',
      achievements: [
        'Built trading platform processing $50M+ daily volume',
        'Reduced development cycle time by 40% through automation',
        'Established testing frameworks achieving 95% code coverage'
      ]
    },
    {
      role: 'Frontend Technical Lead',
      company: 'Innovation Labs',
      location: 'South Africa',
      period: '2019 - 2020',
      type: 'Technical Leadership',
      description: 'Directed frontend architecture for e-commerce platforms serving the African market. Specialized in Progressive Web Applications and mobile-first development.',
      achievements: [
        'Launched e-commerce platform with 2M+ active users',
        'Implemented offline-first PWA increasing user retention by 35%',
        'Led technical training for 20+ developers across 3 countries'
      ]
    },
    {
      role: 'Senior Project Manager',
      company: 'Government Digital Transformation',
      location: 'Iraq',
      period: '2018 - 2019',
      type: 'Project Management',
      description: 'Managed large-scale digital transformation initiatives for the Iraqi government. Oversaw budget of $2M+ and coordinated with multiple stakeholders.',
      achievements: [
        'Delivered national ID system serving 40M+ citizens',
        'Managed cross-functional teams of 25+ professionals',
        'Completed project 3 months ahead of schedule'
      ]
    },
    {
      role: 'Project Manager - Smart City Initiative',
      company: 'Urban Development Authority',
      location: 'Turkey',
      period: '2017 - 2018',
      type: 'Project Management',
      description: 'Led smart city technology implementation across major Turkish municipalities. Managed vendor relationships and technical integration.',
      achievements: [
        'Implemented IoT infrastructure for 5 major cities',
        'Reduced operational costs by 30% through automation',
        'Coordinated with 15+ government agencies'
      ]
    },
    {
      role: 'Technical Project Manager',
      company: 'Digital Egypt Initiative',
      location: 'Egypt',
      period: '2016 - 2017',
      type: 'Project Management',
      description: 'Spearheaded digital government services platform development. Managed technical requirements and stakeholder communications for nationwide rollout.',
      achievements: [
        'Launched digital services portal for 100M+ citizens',
        'Achieved 98% user satisfaction rate',
        'Delivered under budget with 15% cost savings'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading innovative projects and technical teams across multiple continents
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block glow-effect" />
                
                <div className="md:ml-16">
                  <div className="card-gradient rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Technical Leadership' 
                            ? 'bg-blue-600/20 text-blue-400' 
                            : 'bg-purple-600/20 text-purple-400'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-200 flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}