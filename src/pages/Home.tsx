import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedText from '../components/AnimatedText';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80"
        height="h-screen"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <AnimatedText
              text="✠ Kemplast Industries ✠"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <AnimatedText
              text="YOUR TRUSTED PARTNER IN CHEMICAL MANUFACTURING"
              className="text-xl md:text-2xl mb-8"
              delay={0.5}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => navigate('/about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto"
            >
              <span>Discover More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </ParallaxSection>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl font-bold mb-6">Welcome to Kemplast Industries</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are proud to introduce ourselves as one of the leading manufacturers of Chlorinated
                  Paraffin Wax under the brand name "CHEMCHLOR." Our modern facility, located in
                  Chhatral, Gujarat, has a production capacity of 10,000 MT per annum.
                </p>
                <ul className="space-y-4">
                  {[
                    'State-of-the-art manufacturing facility',
                    'Dedicated team of technical experts',
                    'Trusted by manufacturers across India',
                    'Versatile applications across industries',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Factory Interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80"
        height="h-96"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
              >
                Contact Us Today
              </motion.button>
            </FadeInWhenVisible>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;