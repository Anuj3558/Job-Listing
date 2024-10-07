import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const feedbacks = [
  {
    name: "John Doe",
    profilePicture: "https://i.pravatar.cc/50?img=1",
    feedback:
      "The service was exceptional from start to finish. The team was responsive and attentive to all my needs. They went above and beyond to ensure everything was perfect. I was thoroughly impressed with their professionalism.",
  },
  {
    name: "Jane Smith",
    profilePicture: "https://i.pravatar.cc/50?img=2",
    feedback:
      "I had a fantastic experience with this company. The staff were incredibly friendly and helpful, making sure all my questions were answered promptly. The product quality exceeded my expectations, and the delivery was timely. It's rare to find such a dedicated and customer-oriented team. I will definitely be returning for future needs.",
  },
  {
    name: "Emily Johnson",
    profilePicture: "https://i.pravatar.cc/50?img=3",
    feedback:
      "Absolutely delighted with the service provided. From the initial consultation to the final delivery, everything was handled with utmost care and professionalism. The team was fantastic.",
  },
  // Add the rest of the feedbacks as needed
];

const TestimonialCard = React.memo(({ feedback, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={feedback.profilePicture}
            alt={feedback.name}
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {feedback.name}
          </h3>
        </div>
        <p className="text-gray-600 italic">
          &ldquo;{feedback.feedback}&rdquo;
        </p>
      </div>
    </motion.div>
  );
});

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <TestimonialCard key={index} feedback={feedback} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
