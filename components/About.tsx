export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-100">
              Senior Software Engineer Passionate About Creating Digital Excellence
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 3 years of experience as a <strong className="text-gray-100">Senior Software Engineer</strong>, I&apos;ve evolved from a passionate developer 
                into a senior engineer who drives innovation across the full stack. My expertise as a Senior Software Engineer spans 
                modern frontend frameworks like <a href="#skills" className="text-blue-400 hover:underline">React.js and Next.js</a>, coupled with robust backend technologies 
                including <a href="#skills" className="text-blue-400 hover:underline">Node.js, Nest.js</a>, and cloud-native solutions.
              </p>
              <p>
                As a <strong className="text-gray-100">Senior Software Engineer</strong>, I&apos;ve successfully <a href="#experience" className="text-blue-400 hover:underline">led cross-functional teams</a> in delivering mission-critical 
                applications for government entities across the Middle East, Africa, and North America. My dual expertise as a Senior Software Engineer 
                in hands-on development and <a href="#experience" className="text-blue-400 hover:underline">strategic project management</a> enables me to bridge the gap between technical 
                excellence and business objectives.
              </p>
              <p>
                I&apos;m passionate about architecting scalable solutions, mentoring development teams, and staying at the 
                forefront of emerging technologies. Whether leading a frontend engineering team or managing complex 
                government projects, I bring a commitment to quality, innovation, and delivery excellence. 
                <a href="#contact" className="text-blue-400 hover:underline">Let&apos;s connect</a> to discuss how I can contribute to your next project.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8 glow-effect">
              <h4 className="text-xl font-semibold text-gray-100 mb-4">Key Achievements</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0" />
                  Led 12+ successful projects across 7 countries
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0" />
                  Managed teams of 5-15 developers and designers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0" />
                  Delivered government-scale applications serving millions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0" />
                  Expert in modern DevOps and cloud infrastructure
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-gradient rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="card-gradient rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">30+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}