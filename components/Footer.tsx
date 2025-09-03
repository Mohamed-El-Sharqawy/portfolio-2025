import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-gradient">Moe.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Senior Software Engineer passionate about creating exceptional digital experiences
              and leading innovative projects across the globe.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Expertise</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Frontend Development</li>
              <li>Backend Architecture</li>
              <li>Team Leadership</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Global Experience</h3>
            <ul className="space-y-2 text-gray-400">
              <li>United Arab Emirates</li>
              <li>Saudi Arabia</li>
              <li>United States</li>
              <li>Netherlands</li>
              <li>South Africa</li>
              <li>Iraq</li>
              <li>Turkey</li>
              <li>Egypt</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="h-4 w-4 text-red-400 mx-2" /> and lots of coffee ☕
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Moe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}