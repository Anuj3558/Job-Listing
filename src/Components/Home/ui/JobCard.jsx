import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?.id}`}>
      <div
        className="w-full md:w-[30rem] 2xl:w-[32rem] h-[20rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-xl 
                -lg px-5 py-6 hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="flex ">
          <img
            src={job?.company?.profileUrl}
            alt={job?.company?.name}
            className="w-16 h-16 rounded-full shadow-sm"
          />

          <div className="flex flex-col flex-grow ml-3 max-w-[calc(100%-4rem)]">
            <p className="text-xl font-bold truncate">{job?.jobTitle}</p>
            <p className="flex gap-2 items-center justify-center text-gray-600">
              <GoLocation className="text-slate-700 text-base" />
              {job?.location}
            </p>
          </div>
        </div>

        <div className="py-4 text-gray-700">
          <p className="text-sm leading-relaxed">
            {job?.detail[0]?.desc?.slice(0, 150) + "..."}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="bg-[#1d4fd826] text-[#1d4fd8] py-1 px-2  font-semibold text-sm">
            {job?.jobType}
          </p>
          <span className="text-gray-500 text-sm">
            {moment(job?.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;