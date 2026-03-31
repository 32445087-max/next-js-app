
import type{ Job } from "../../App";


type Props = {
  jobs: Job[];
};

const Listing = ({ jobs }: Props) => {
  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <div key={job.id} className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
        <p className="text-sm text-gray-500">カテゴリ：{job.category}</p>
        <p className="text-sm">年収：{job.salary}万円</p>
        </div>
      ))}
    </div>

  );
};

export default Listing;
