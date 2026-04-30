import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
import lottieAbout from '../../assets/lottie/about.json';
import Lottie from "lottie-react";

const AboutMe = () => {
  const { darkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle grid background - consistent with Education & Skills */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6" ref={sectionRef}>
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
            About Me<span className="text-purple-500">_</span>
          </h2>
          
          <p className={`text-sm font-medium mb-6 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
            Know more about who I am
          </p>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className={`relative rounded-3xl overflow-hidden p-4 w-full max-w-md lg:max-w-lg
              ${darkMode ? "bg-gray-900/70" : "bg-white shadow-xl"}`}
            >
              <Lottie
                animationData={lottieAbout}
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right: Introduction Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className={`rounded-3xl p-8 lg:p-10 border transition-all
              ${darkMode 
                ? "bg-gray-900/70 border-white/10" 
                : "bg-white border-gray-100 shadow-lg"
              }`}
            >
              <div className="space-y-6 text-[15.5px] leading-relaxed">
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  This is <span className="font-semibold text-purple-500">Abdul Mazid Akash</span>. 
                  I’m a student currently pursuing a B.Sc. in Textile Engineering at 
                  <span className="font-medium"> Narsingdi Textile Engineering College</span>. 
                  My hometown is Feni, and I’m currently living in Narsingdi for my studies.
                </p>

                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  I recently completed a comprehensive web development course from 
                  <a 
                    href="https://www.programming-hero.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Programming Hero
                  </a>. 
                  Currently, I’m focused on building modern web applications using 
                  JavaScript, React.js, Node.js, and MongoDB.
                </p>

                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  I’ve worked on several projects, including 
                  <a 
                    href="https://scholarship-hub-akash.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    ScholarshipHub
                  </a>, 
                  a scholarship management system. One of my notable team projects is 
                  <a 
                    href="https://tickto-booking.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    TickTo
                  </a>, 
                  a bus ticket booking platform where I contributed to real-time seat selection and secure payment features.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;