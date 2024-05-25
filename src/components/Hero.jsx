import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <motion.div
        animate={{
          scale: [0, 1],
        }}
        transition={{ duration: 0.5 }}
        className="hero-wrapper"
      >
        <h1 className="hero-wrapper-title">
          <span>Hello. I'm Martin.</span>
          <span>A frontend developer.</span>
        </h1>
        <p className="hero-wrapper-description">
          I enjoy creating things that live on the internet. I am dedicated to
          designing experiences that are user-friendly, accessible, and tailored
          to meet the needs of the users.
        </p>
      </motion.div>
      <motion.svg
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        class="arrows"
      >
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </motion.svg>
    </div>
  );
};

export default Hero;
