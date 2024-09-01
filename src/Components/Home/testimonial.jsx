import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const feedbacks = [
  {
    name: 'John Doe',
    profilePicture: 'https://i.pravatar.cc/50?img=1',
    feedback:
      'The service was exceptional from start to finish. The team was responsive and attentive to all my needs. They went above and beyond to ensure everything was perfect. I was thoroughly impressed with their professionalism.',
  },
  {
    name: 'Jane Smith',
    profilePicture: 'https://i.pravatar.cc/50?img=2',
    feedback:
      'I had a fantastic experience with this company. The staff were incredibly friendly and helpful, making sure all my questions were answered promptly. The product quality exceeded my expectations, and the delivery was timely. It’s rare to find such a dedicated and customer-oriented team. I will definitely be returning for future needs.',
  },
  {
    name: 'Emily Johnson',
    profilePicture: 'https://i.pravatar.cc/50?img=3',
    feedback:
      'Absolutely delighted with the service provided. From the initial consultation to the final delivery, everything was handled with utmost care and professionalism. The team was fantastic.',
  },
  {
    name: 'Michael Brown',
    profilePicture: 'https://i.pravatar.cc/50?img=4',
    feedback:
      'The level of service and support I received was unparalleled. The team was proactive, ensuring that all aspects of the service were delivered smoothly and efficiently.',
  },
  {
    name: 'Sophia Davis',
    profilePicture: 'https://i.pravatar.cc/50?img=5',
    feedback:
      'This company exceeded all my expectations. The service was prompt, professional, and the quality was exceptional. The team was highly knowledgeable and provided valuable insights and recommendations. I felt like a priority throughout the process, and the end result was fantastic. I will definitely be recommending them to others.',
  },
  {
    name: 'Daniel Wilson',
    profilePicture: 'https://i.pravatar.cc/50?img=6',
    feedback:
      'An outstanding experience from start to finish. The team was efficient, friendly, and went the extra mile to ensure everything was handled to my satisfaction. Their attention to detail and commitment to delivering top-quality results were apparent. I am thoroughly impressed and would not hesitate to use their services again.',
  },
  {
    name: 'Olivia Moore',
    profilePicture: 'https://i.pravatar.cc/50?img=7',
    feedback:
      'I am extremely pleased with the service provided. The staff were professional and attentive, ensuring all my requirements were met. The quality of work was excellent, and the entire process was seamless. It’s refreshing to work with a team that truly values customer satisfaction. Highly recommended for anyone seeking reliable service.',
  },
  {
    name: 'James Taylor',
    profilePicture: 'https://i.pravatar.cc/50?img=8',
    feedback:
      'The level of care and professionalism shown by this team was remarkable. They made sure every detail was addressed and provided exceptional service throughout.',
  },
  {
    name: 'Ava Anderson',
    profilePicture: 'https://i.pravatar.cc/50?img=9',
    feedback:
      'From start to finish, the service was flawless. The team was highly responsive, ensuring all my needs were met promptly. Their dedication to delivering high-quality work was evident, and I felt well-supported throughout the entire process. I am extremely happy with the results and would highly recommend them to anyone in need of their services.',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#374151',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProfilePicture = styled('img')({
  borderRadius: '50%',
  width: 50,
  height: 50,
  objectFit: 'cover',
  marginBottom: 10,
});

export default function Testimonials() {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, isInView]);

  return (
    <>
      <h1 className="text-2xl pt-10 poppins poppins-bold text-center">
        Testimonials
      </h1>
      <div className="w-[100%] pt-8">
        <Box className="mx-auto" sx={{ width: '90%', minHeight: 393 }}>
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={{ xs: 2, sm: 4, md: 7 }}
          >
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                ref={sectionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Item>
                  <div>
                    <div className="flex items-center pl-5 w-[100%] gap-4">
                      <ProfilePicture
                        className="justify-start"
                        src={feedback.profilePicture}
                        alt={feedback.name}
                      />
                      <h4 className="poppins text-[#49e4fa] text-xl poppins-bold">
                        {feedback.name}
                      </h4>
                    </div>
                    <p className="text-white poppins p-10">{feedback.feedback}</p>
                  </div>
                </Item>
              </motion.div>
            ))}
          </Masonry>
        </Box>
      </div>
    </>
  );
}
