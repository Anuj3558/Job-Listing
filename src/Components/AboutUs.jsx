import React from 'react';

const AboutUs = () => {
  return (
    <div>
     
  
      {/* Service Area */}
      <section className="py-[10vh] px-10 ">
        <div className="container  text-center">
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
              <div key={index} className="bg-white shadow-lg 400-lg p-6">
                <h4 className="text-xl font-bold flex items-center mb-4">
                  <span className={`lnr ${service.icon} text-3xl text-purple-400 mr-2`}></span>
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Area */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <img src="img/pages/f1.jpg" alt="Feature 1" className="w-full 400-lg" />
            </div>
            <div className="lg:col-span-1">
              <h6 className="text-purple-400 text-sm font-bold uppercase">Basic & Common Repairs</h6>
              <h1 className="text-3xl font-bold mt-2">Who we are</h1>
              <p className="mt-4 text-gray-600">Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
            </div>
            <div className="lg:col-span-1">
              <img src="img/pages/f2.jpg" alt="Feature 2" className="w-full 400-lg" />
            </div>
            <div className="lg:col-span-1">
              <h6 className="text-purple-400 text-sm font-bold uppercase">Basic & Common Repairs</h6>
              <h1 className="text-3xl font-bold mt-2">What we do</h1>
              <p className="mt-4 text-gray-600">Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Ethel Davis', role: 'Managing Director (Sales)', img: 'img/pages/t1.jpg' },
              { name: 'Rodney Cooper', role: 'Creative Art Director (Project)', img: 'img/pages/t2.jpg' },
              { name: 'Dora Walker', role: 'Senior Core Developer', img: 'img/pages/t3.jpg' },
              { name: 'Lena Keller', role: 'Creative Content Developer', img: 'img/pages/t4.jpg' }
            ].map((team, index) => (
              <div key={index} className="single-team">
                <div className="thumb relative">
                  <img src={team.img} alt={team.name} className="w-full 400-lg" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Area */}
      <section className="bg-purple-400 py-16">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Join us today without any hesitation</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="inline-block bg-white text-purple-400 px-8 py-3 mt-6 400-lg font-bold hover:bg-gray-200">Become a Member</a>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
