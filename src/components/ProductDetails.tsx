import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProductDetailsProps {
  product: {
    name: string;
    description: string;
    applications: string[];
    specifications?: string[];
    technicalDetails?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:right-auto md:w-[600px] md:-translate-x-1/2 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Description</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Applications</h3>
                  <ul className="space-y-2 mb-6">
                    {product.applications.map((app, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-gray-600">{app}</span>
                      </li>
                    ))}
                  </ul>

                  {product.specifications && (
                    <>
                      <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                      <ul className="space-y-2 mb-6">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="text-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.technicalDetails && (
                    <>
                      <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                      <p className="text-gray-600">{product.technicalDetails}</p>
                    </>
                  )}
                </div>
              </div>
              
              <div className="p-6 border-t bg-gray-50">
                <button
                  onClick={onClose}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetails;