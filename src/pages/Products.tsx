import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import ProductDetails from '../components/ProductDetails';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      name: 'Chlorinated Paraffin',
      image: 'https://images.unsplash.com/photo-1584942368913-b98dd9983c7e?auto=format&fit=crop&q=80',
      description: 'Chlorinated paraffins are mixtures of polychlorinated n-alkanes produced by the reaction of chlorine with specific normal paraffin fractions. Available in various grades with chlorine content ranging from 30% to 70%.',
      applications: [
        'PVC Plasticizer',
        'Extreme Pressure Additives',
        'Fire Retardant',
        'Paint Industry',
      ],
      specifications: [
        'Chlorine Content: 30-70%',
        'Appearance: Clear liquid',
        'Specific Gravity: 1.15-1.35',
        'Viscosity: 15-150 cP at 25°C',
      ],
      technicalDetails: 'Our Chlorinated Paraffin is manufactured using advanced chlorination technology, ensuring high product quality and consistency. The product meets international standards and is suitable for various industrial applications.',
    },
    {
      name: 'Sodium Hypochlorite',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
      description: 'Sodium hypochlorite (NaOCl) is a solution made from reacting chlorine with a sodium hydroxide solution. Known for its powerful disinfectant and bleaching properties.',
      applications: [
        'Water Treatment',
        'Bleaching Agent',
        'Disinfectant',
        'Chemical Intermediate',
      ],
      specifications: [
        'Available Chlorine: 10-15%',
        'pH: 11-13',
        'Appearance: Clear, pale yellow liquid',
        'Density: 1.1-1.3 g/cm³',
      ],
      technicalDetails: 'Our Sodium Hypochlorite solution is manufactured through a controlled chlorination process, ensuring optimal stability and effectiveness. The product is available in various concentrations to meet specific application requirements.',
    },
    {
      name: 'Hydrochloric Acid',
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80',
      description: 'Hydrochloric acid (HCl) is a strong, corrosive acid commonly used in various industrial applications. Available in different concentrations to suit specific requirements.',
      applications: [
        'pH Regulation',
        'Metal Treatment',
        'Chemical Processing',
        'Oil Well Acidizing',
      ],
      specifications: [
        'Concentration: 31-37%',
        'Appearance: Clear, colorless liquid',
        'Specific Gravity: 1.16-1.19',
        'Iron Content: <5 ppm',
      ],
      technicalDetails: 'Our Hydrochloric Acid is produced using high-purity raw materials and advanced manufacturing processes. The product meets stringent quality standards and is suitable for diverse industrial applications.',
    },
  ];

  return (
    <div className="pt-16">
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1617900906639-cab7adceb499?auto=format&fit=crop&q=80"
        height="h-96"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl">Innovative solutions for diverse industrial applications</p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, index) => (
              <FadeInWhenVisible key={product.name} delay={index * 0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg overflow-hidden shadow-xl"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[400px] object-cover"
                    />
                  </motion.div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Applications</h3>
                    <ul className="space-y-3">
                      {product.applications.map((app) => (
                        <motion.li
                          key={app}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span>{app}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(product)}
                      className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <ProductDetails
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;