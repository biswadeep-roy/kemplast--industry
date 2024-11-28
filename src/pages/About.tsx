import React from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from '../components/ParallaxSection';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import raviImage from '../assets/ravi.jpg';
import rajivImage from '../assets/rajiv.jpg';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80"
        height="h-96"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Leading the way in chemical manufacturing excellence</p>
          </div>
        </div>
      </ParallaxSection>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  KEMPLAST INDUSTRIES stands as one of the leading manufacturers of Chlorinated Paraffin
                  Wax under the brand name "CHEMCHLOR". Our state-of-the-art facility in Chhatral,
                  Gujarat, boasts a production capacity of 10,000 MT per annum, with the capability to
                  double output when required.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a strong emphasis on professionalism, we have assembled a dedicated team of
                  highly experienced technical personnel and administrators who ensure the highest
                  quality standards in all our operations.
                </p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80"
                  alt="Chemical Manufacturing"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Managing Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership</h2>
              <p className="text-gray-600">Meet the visionaries behind our success</p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInWhenVisible delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={raviImage}
                      alt="Ravi Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ravi Patel</h3>
                  <p className="text-gray-600 mb-4">Managing Director</p>
                  <blockquote className="text-gray-600 italic">
                    "Innovation is the backbone of progress. At Kemplast Industries, we strive to lead
                    with creativity and excellence."
                  </blockquote>
                </div>
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={rajivImage}
                      alt="Rajiv Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rajiv Patel</h3>
                  <p className="text-gray-600 mb-4">Director</p>
                  <blockquote className="text-gray-600 italic">
                    "Quality and customer satisfaction are at the heart of everything we do at Kemplast
                    Industries."
                  </blockquote>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;