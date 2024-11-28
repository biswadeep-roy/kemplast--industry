import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  height?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  children,
  height = 'h-screen',
  overlay = true,
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
    { stiffness: 100, damping: 30, mass: 0.5 }
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: inView ? 1 : 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {overlay && <div className="absolute inset-0 bg-black/50" />}
      </motion.div>
      <motion.div
        className="relative z-10 h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;