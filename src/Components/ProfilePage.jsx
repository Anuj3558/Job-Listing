import React from 'react';

const JobPortalProfilePage = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* Profile Summary Section */}
          <div className="lg:w-1/3 mb-4">
            <div className="card bg-white p-6 text-center shadow-md mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-full w-36 h-36 mx-auto"
              />
              <h5 className="my-3 text-lg font-medium">John Smith</h5>
              <p className="text-gray-500 mb-1">Full Stack Developer</p>
              <p className="text-gray-500 mb-4">Bay Area, San Francisco, CA</p>
              <div className="flex justify-center mb-2">
                <button className="btn bg-blue-600 text-white px-4 py-2  mr-2">
                  Connect
                </button>
                <button className="btn border border-blue-600 text-blue-600 px-4 py-2 ">
                  Message
                </button>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="card bg-white shadow-md">
              <ul className="list-group">
                <li className="list-group-item flex justify-between items-center p-3">
                  <i className="fas fa-globe text-yellow-500"></i>
                  <p className="mb-0 text-gray-700">https://portfolio.com</p>
                </li>
                <li className="list-group-item flex justify-between items-center p-3">
                  <i className="fab fa-github text-gray-700"></i>
                  <p className="mb-0 text-gray-700">githubUser</p>
                </li>
                <li className="list-group-item flex justify-between items-center p-3">
                  <i className="fab fa-linkedin text-blue-600"></i>
                  <p className="mb-0 text-gray-700">John Smith</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="lg:w-2/3 ml-6">
            <div className="card bg-white p-6 shadow-md mb-4">
              {[
                { label: 'Full Name', value: 'John Smith' },
                { label: 'Email', value: 'example@example.com' },
                { label: 'Phone', value: '(097) 234-5678' },
                { label: 'Location', value: 'Bay Area, San Francisco, CA' },
                { label: 'Experience', value: '5 years' },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex justify-between py-2">
                    <p className="mb-0 text-gray-700">{item.label}</p>
                    <p className="text-gray-500 mb-0">{item.value}</p>
                  </div>
                  {index < 4 && <hr />}
                </React.Fragment>
              ))}
            </div>

            {/* Job Application Status Section */}
            <div className="flex flex-col md:flex-row">
              {[1, 2].map((_, idx) => (
                <div className="w-full md:w-1/2 md:ml-4" key={idx}>
                  <div className="card bg-white p-6 shadow-md mb-4">
                    <p className="mb-4 text-blue-600 italic">Application Status</p>
                    {[
                      { label: 'Frontend Developer at XYZ Corp', value: 'Interview Scheduled' },
                      { label: 'Backend Developer at ABC Inc.', value: 'Application Submitted' },
                      { label: 'Full Stack Developer at DEF Ltd.', value: 'Offer Received' },
                      { label: 'UI/UX Designer at GHI Studio', value: 'Rejected' },
                      { label: 'Mobile Developer at JKL Apps', value: 'In Review' },
                    ].map((job, index) => (
                      <React.Fragment key={index}>
                        <p className="text-sm mb-1">{job.label}</p>
                        <div className="w-full bg-gray-200 h-1.5 mb-4">
                          <div
                            className={`${
                              job.value === 'Offer Received'
                                ? 'bg-green-600'
                                : job.value === 'Rejected'
                                ? 'bg-red-600'
                                : job.value === 'Interview Scheduled'
                                ? 'bg-blue-600'
                                : 'bg-yellow-500'
                            } h-1.5`}
                            style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                          ></div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortalProfilePage;
