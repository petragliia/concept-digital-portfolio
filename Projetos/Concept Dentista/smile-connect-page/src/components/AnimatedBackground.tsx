import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: "var(--gradient-hero)",
        }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--neon-blue) / 0.4) 0%, transparent 70%)",
          top: "10%",
          right: "10%",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(var(--mint) / 0.4) 0%, transparent 70%)",
          bottom: "20%",
          left: "5%",
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--neon-blue-glow) / 0.3) 0%, transparent 70%)",
          top: "60%",
          right: "30%",
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Small floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: i % 2 === 0 
              ? "hsl(var(--neon-blue) / 0.5)" 
              : "hsl(var(--mint) / 0.5)",
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
