import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HeroImage, HeroImg } from '../assets'
import { f1, f2, t1, t2, t3, t4, t5 } from '../asset'
import Testimonials from './Home/testimonial'
import Banner from './Home/ui/Banner'

const Service = ({ icon, title, desc }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
    <i className={`${icon} text-4xl text-purple-600 mb-4`}></i>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
)

const FeatureSection = ({ title, subtitle, description }) => (
  <motion.div
    className="lg:col-span-1 p-7 text-white bg-black bg-opacity-80"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h6 className="text-purple-400 text-sm font-bold uppercase">{subtitle}</h6>
    <h2 className="text-3xl font-bold mt-2">{title}</h2>
    <p className="mt-4 text-gray-300">{description}</p>
  </motion.div>
)

const TeamMember = ({ name, role, img }) => (
  <motion.div
    className="team-member flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative group overflow-hidden rounded-lg">
      <img src={img} alt={name} className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center space-x-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <div className="mt-4 text-center">
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </div>
  </motion.div>
)

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <div className="bg-gray-50">
      <Banner page="About us" />

      {/* Service Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We are passionate about eco-friendly systems and cutting-edge technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Service icon="fas fa-user" title="Expert Technicians" desc="Our team consists of highly skilled professionals with years of experience in the field." />
            <Service icon="fas fa-award" title="Professional Service" desc="We pride ourselves on delivering top-notch service that exceeds expectations." />
            <Service icon="fas fa-phone" title="Great Support" desc="Our customer support team is always ready to assist you with any queries or concerns." />
            <Service icon="fas fa-rocket" title="Technical Skills" desc="We stay updated with the latest technologies to provide cutting-edge solutions." />
            <Service icon="fas fa-gem" title="Highly Recommended" desc="Our satisfied clients consistently recommend our services to others." />
            <Service icon="fas fa-comments" title="Positive Reviews" desc="We have a track record of positive feedback and high ratings from our clients." />
          </div>
        </div>
      </section>

      {/* Feature Area */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <img src={f1} alt="Feature 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <FeatureSection
              title="Who we are"
              subtitle="Basic & Common Repairs"
              description="We are a team of dedicated professionals committed to providing top-notch computer repair services. Our expertise spans across various operating systems and hardware configurations."
            />
            <div className="lg:col-span-1">
              <img src={f2} alt="Feature 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <FeatureSection
              title="What we do"
              subtitle="Advanced Troubleshooting"
              description="We specialize in diagnosing and resolving complex computer issues. From software conflicts to hardware malfunctions, we have the skills and tools to get your system back up and running efficiently."
            />
          </div>
        </div>
      </section>

      {/* Team Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Developer Team</h2>
            <p className="text-xl text-gray-600">Meet the talented individuals behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember name="Anuj Loharkar" role="Full Stack Developer" img={t1} />
            <TeamMember name="Swaraj Mahadik" role="Full Stack Developer" img={t2} />
            <TeamMember name="Tejashree Panaskar" role="Senior Core Developer" img={t3} />
            <TeamMember name="Ashish Ram" role="Management Head" img={t4} />
            <TeamMember name="Kartavya" role="Research and Development" img={t5} />
          </div>
        </div>
      </section>

      {/* Call to Action Area */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Join us today without any hesitation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Experience the difference with our expert team and cutting-edge solutions. Take the first step towards transforming your digital journey.</p>
          <a href="#" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg transition-colors duration-300 hover:bg-gray-100 hover:text-purple-700">Become a Member</a>
        </div>
      </section>

      <Testimonials />
    </div>
  )
}

export default AboutUs