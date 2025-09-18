'use client';

import { experiences } from '@/data/experience';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading innovative projects and technical teams across multiple continents. 
            <a href="#contact" className="text-blue-400 hover:underline">Reach out</a> to discuss collaboration opportunities.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full hidden md:block glow-effect" />
                
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
                      <span className="font-semibold text-gray-200 flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
                        Key Achievements
                      </span>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0" />
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