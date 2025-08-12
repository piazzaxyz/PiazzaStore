import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative flex items-center justify-center`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F] via-[#00E5FF] to-[#FF6B35] rounded-full animate-pulse" />
        
        {/* Inner circle */}
        <div className="relative bg-black rounded-full w-full h-full flex items-center justify-center border-2 border-white shadow-lg">
          <span className="font-black text-white tracking-tighter">PZ</span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00FF7F] to-[#FF6B35] rounded-full blur-md opacity-30 animate-pulse" />
      </div>
    </motion.div>
  );
};

export default Logo;