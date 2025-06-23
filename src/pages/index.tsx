import Image from 'next/image';
import { motion } from 'framer-motion';
import SplitText from '@/components/ui/SplitText/SplitText';
import { Nav } from '@/components/Nav';
// import { fadeIn } from '@/variants';
import AnimatedButton from '@/components/Button';
import Strengths from '@/components/Strengths';
import WhoAreWe from '@/components/WhoAreWe';
import { FaArrowRight, FaRegPaperPlane } from 'react-icons/fa';
import Industries from '@/components/Industries';
import {
  fadeInUp,
  staggerContainer,
  slideInFromRight,
  scaleIn,
} from '@/variants/index';
export default function Home() {
  // type AnimationVariant = Variants;

  // const fadeInUp: AnimationVariant = {
  //   hidden: { opacity: 0, y: 60 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: 'easeOut' },
  //   },
  // };

  // const staggerContainer: AnimationVariant = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.3,
  //     },
  //   },
  // };

  // const slideInFromRight: AnimationVariant = {
  //   hidden: { opacity: 0, x: 100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.8, ease: 'easeOut' },
  //   },
  // };

  // const scaleIn: AnimationVariant = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.5, ease: 'easeOut' },
  //   },
  // };

  return (
    <div>
      <Nav />
      <main className="bg-secondary  flex justify-center  px-4 md:px-8 lg:mb-10 pt-20 lg:pt-0 ">
        <div className="flex flex-col md:flex-row items-center scale-98 max-w-7xl m-auto py-10 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-7"
          >
            <SplitText
              text="Empowering SMEs With Smart EDI Automation"
              className="text-maingreen text-3xl lg:text-5xl font-bold"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
            <motion.p
              variants={fadeInUp}
              className="text-white text-[16px] lg:text-lg font-extralight "
            >
              We simplify Electronic Data Interchange (EDI) for modern
              businesses, enabling fast, secure, and seamless integration across
              supply chains.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <AnimatedButton text={'Get started'} icon={FaArrowRight} />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/OH-RES/edd.png?updatedAt=1750539156294"
              alt=""
            />
          </motion.div>
        </div>
      </main>

      <section className="md:py-5 px-4 md:px-8 mb-5 lg:mb-10">
        <div className="scale-98 max-w-7xl m-auto py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mb-10 md:mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-[#198754] text-lg md:text-xl mb-2
            "
            >
              OUR CORE STRENGTHS
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              className="text-maingreen text-2xl md:text-3xl font-bold"
            >
              Designed for Scalability,{' '}
              <span className="text-secondary">Security</span>, and Simplicity
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Strengths />
          </motion.div>
        </div>
      </section>

      <section className=" px-4 md:px-8 py-10 mb-5 md:mb-10">
        <div className="scale-98 max-w-7xl m-auto ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-4 text-center mb-7 lg:mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="border-2 border-maingreen max-w-20 mb-4 rounded-2xl m-auto"
            ></motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[#198754] text-xl md:text-2xl font-medium"
            >
              WHO WE ARE
            </motion.h2>
            <motion.h1
              variants={fadeInUp}
              className="text-maingreen font-bold text-xl md:text-2xl lg:text-3xl lg:mb-7"
            >
              Modernizing <span className="text-secondary">EDI</span> for
              Growing Businesses
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-light text-lg max-w-4xl m-auto md:text-xl "
            >
              At OH-RES, we deliver{' '}
              <span className="text-maingreen font-semibold">
                impact-driven EDI solutions
              </span>{' '}
              that simplify communication between systems. With a focus on{' '}
              <span className="text-maingreen font-semibold">automation</span>,
              <span className="text-maingreen font-semibold">security</span>,
              and{' '}
              <span className="text-maingreen font-semibold">scalability</span>,
              we help companies thrive in today’s fast-paced digital space.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <WhoAreWe />
          </motion.div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col  md:gap-7 lg:gap-10 md:flex-row space-y-10 max-w-7xl m-auto scale-98
        "
        >
          <div
            className="md:w-1/2
          "
          >
            <img
              src="https://img.freepik.com/premium-photo/business-people-meeting-shaking-hands_53876-137476.jpg?semt=ais_hybrid&w=740"
              className="h-auto md:h-[20rem] lg:h-auto"
              alt=""
            />
          </div>

          <div
            className="md:w-1/2
          "
          >
            <h1 className="text-[#198754] text-xl lg:text-2xl font-semibold tracking-wide mb-2">
              ABOUT US
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold mb-4">
              Redefining Resource Solutions
            </h2>
            <p className="text-[16px] lg:text-xl mb-6">
              OH-RES is more than just a solutions provider — we’re a
              future-driven team reshaping how Africa accesses and manages its
              natural resources. From green infrastructure to energy
              optimization, we help governments, communities, and businesses
              lead with impact
            </p>
            <AnimatedButton
              text={'Talk to Us'}
              icon={FaRegPaperPlane}
              iconPosition="left"
              className="flex-row-reverse"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-secondary my-10 py-5">
        <div className=" max-w-7xl m-auto px-4 md:px-8 py-10  flex flex-col lg:flex-row items-center justify-between text-center">
          <p
            className="text-white text-2xl font-bold mb-5 lg:mb-0
          "
          >
            Ready to simplify your business with smart EDI solutions?
          </p>
          <AnimatedButton
            text={'Talk to Us'}
            icon={FaRegPaperPlane}
            iconPosition="left"
            className="px-7 "
          />
        </div>
      </section>

      <section className="px-4 md:px-8 py-10">
        <div className="max-w-7xl m-auto scale-98">
          <div className="text-center space-y-2 mb-10">
            <h1 className="text-[#2a9061] uppercase text-xl font-semibold md:text-2xl">
              Industries We Serve
            </h1>
            <h2 className="text-maingreen text-xl font-bold md:text-3xl">
              Smart EDI for Every Industry
            </h2>
            <p className="sm:text-lg">
              From supply chains to hospitals, our platform powers seamless
              communication between systems.
            </p>
          </div>

          <div>
            <Industries />
          </div>
        </div>
      </section>
    </div>
  );

  {
    <SplitText
      text="Hello, GSAP!"
      className="text-2xl font-semibold text-center"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      // onLetterAnimationComplete={handleAnimationComplete}
    />;
  }
}
