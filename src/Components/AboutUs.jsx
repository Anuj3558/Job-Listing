import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeroImage, HeroImg } from '../assets';
import { f1, f2, t1, t2, t3, t4 } from '../asset';
import Testimonials from './Home/testimonial';
import Banner from './Home/ui/Banner';

const AboutUs = () => {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, isInView]);

  return (
    <div>
      <Banner page={"About us"} />

      {/* Service Area */}
      <section className="py-[10vh] px-10">
        <div className="container text-center">
          <div className="max-w-md mx-auto mb-8">
            <h1 className="text-4xl font-bold">Why Choose Us</h1>
            <p className="mt-4 text-gray-600">Who are in extremely love with eco-friendly systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'lnr-user', title: 'Expert Technicians', desc: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.' },
              { icon: 'lnr-license', title: 'Professional Service', desc: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.' },
              { icon: 'lnr-phone', title: 'Great Support', desc: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.' },
              { icon: 'lnr-rocket', title: 'Technical Skills', desc: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.' },
              { icon: 'lnr-diamond', title: 'Highly Recommended', desc: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.' },
              { icon: 'lnr-bubble', title: 'Positive Reviews', desc: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold flex items-center mb-4">
                  <span className={`lnr ${service.icon} text-3xl text-purple-400 mr-2`}></span>
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Area */}
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <img src={f1} alt="Feature 1" className="w-full" />
            </div>
            <motion.div
              className="lg:col-span-1 p-7 text-white bg-[#000000CC]"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              ref={sectionRef}
              transition={{ duration: 0.5 }}
            >
              <h6 className="text-purple-400 text-sm font-bold uppercase">Basic & Common Repairs</h6>
              <h1 className="text-3xl font-bold mt-2">Who we are</h1>
              <p className="mt-4 text-gray-400">Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
            </motion.div>
            <div className="lg:col-span-1">
              <img src={f2} alt="Feature 2" className="w-full h-full" />
            </div>
            <motion.div
              className="lg:col-span-1 p-7 text-white bg-[#000000CC]"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              ref={sectionRef}
              transition={{ duration: 0.5 }}
            >
              <h6 className="text-purple-400 text-sm font-bold uppercase">Basic & Common Repairs</h6>
              <h1 className="text-3xl font-bold mt-2">What we do</h1>
              <p className="mt-4 text-gray-400">Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-md mx-auto mb-8">
            <h1 className="text-4xl font-bold">Experienced Mentor Team</h1>
            <p className="mt-4 text-gray-600">Who are in extremely love with eco-friendly systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8">
            {[
              { name: 'Ethel Davis', role: 'Managing Director (Sales)', img: t1 },
              { name: 'Rodney Cooper', role: 'Creative Art Director (Project)', img: t2 },
              { name: 'Dora Walker', role: 'Senior Core Developer', img: t3 },
              { name: 'Lena Keller', role: 'Creative Content Developer', img: t4 }
            ].map((team, index) => (
              <motion.div
                key={index}
                className="single-team"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="thumb relative">
                  <img src={team.img} alt={team.name} className="w-full" />
                  <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center space-x-4 text-white hidden group-hover:flex">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                <div className="meta-text mt-4 text-center">
                  <h4 className="text-xl font-bold">{team.name}</h4>
                  <p className="text-gray-600">{team.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Area */}
      <section className="bg-purple-400 py-16">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Join us today without any hesitation</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="inline-block bg-white text-purple-400 px-8 py-3 mt-6 font-bold hover:bg-gray-200">Become a Member</a>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}

export default AboutUs;
