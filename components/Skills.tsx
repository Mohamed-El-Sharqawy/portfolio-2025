"use client";

import { skillCategories } from "@/data/skill-categories";
import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive <strong className="text-gray-100">Software Engineer</strong> skill set spanning <a href="#experience" className="text-blue-400 hover:underline">full-stack development</a>, cloud
            architecture, and <a href="#experience" className="text-blue-400 hover:underline">project implementation</a>. 
            <a href="#about" className="text-blue-400 hover:underline">Learn more</a> about my background as a Frontend Developer.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
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
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white glow-effect"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
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
            {
              skillCategories[activeCategory as keyof typeof skillCategories]
                .title
            } Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-blue-400 text-sm font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
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
