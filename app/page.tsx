// // "use client";

// import Header from "@/src/components/Header";
// import Listing from "@/src/components/Home/Listing";
// import JobFilter from "@/src/components/Home/JobFilter";
// import type { Job } from "@/src/types/job";
// import { useState } from "react";
// import { supabase } from "@/src/lib/supabase";

// // バックエンド
// import { useEffect } from "react";

// // コンポーネントごとにPropsで受け取る中身が異なるから、Propsの型もそれぞれ違う。
// // exportしなければ、そのファイル内だけで使われる型だから混ざらない。
// // type Props = {
// //     contentsJobs:Job[];
// // }

// const Home = () => {
// // const Home = () => {
//     // 下returnまで
//       // const jobs = props.contentsJobs;
//       const [jobs, setJobs] = useState<Job[]>([]);

// //       useEffect(() => {
// //   const getJobs = async () => {
// //     const { data, error } = await supabase
// //       .from("jobs")
// //       .select("*");

// //     if (error) {
// //       console.error(error);
// //       return;
// //     }

// //     setJobs(data || []);
// //   };

// //   getJobs();
// // }, []);

// useEffect(() => {
//   const getJobs = async () => {
//     const res = await fetch("/api/jobs");
//     const data = await res.json();
//     setJobs(data);
//   };

//   getJobs();
// }, []);

//     const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
//     const [minSalary, setMinSalary] = useState(0);
//     const [showModal, setShowModal] = useState(false);
//     const [keyword, setKeyword] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;


//     const filteredJobs = jobs.filter((job) =>
//     (selectedCategory.length === 0 ||
//         selectedCategory.includes(job.category)) &&
//     job.salary >= minSalary &&
//     (job.title ?? "").toLowerCase().includes(keyword.toLowerCase())
//   );
//   const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);


//   const start = (currentPage - 1) * itemsPerPage;
//   const paginatedJobs = filteredJobs.slice(start, start + itemsPerPage);
//     return(
//         <div className="min-h-screen bg-gray-100 flex flex-col">
//           <Header setShowModal={setShowModal} />
//           {showModal && (
//       <div className="w-full flex px-6 items-start">
//         <div className="bg-white p-6 rounded shadow">
//           <input
//             type="text"
//             placeholder="キーワード入力"
//             onChange={(e) => {
//               setKeyword(e.target.value);
//               setCurrentPage(1);
//             }}
//           />
//           <button onClick={() => setShowModal(false)}>検索</button>
//         </div>
//       </div>
//     )}
//     <div className="flex-1 flex w-full">
//       <div className="w-64 bg-gray-200 p-6">
//         <JobFilter
//         setSelectedCategory={setSelectedCategory}
//         setMinSalary={setMinSalary}
//         setKeyword={setKeyword}
//         setCurrentPage={setCurrentPage}
//         />
//       </div>
//       <div className="flex-1 bg-white p-6">
//       <h2 className="text-xl font-bold mb-2">求人一覧</h2>
//       <p className="text-sm text-gray-500 mb-4">該当件数：{filteredJobs.length}件</p>
//       <Listing jobs={paginatedJobs}/>
//               {filteredJobs.length > 0 && (
//           <div className="flex justify-center">
//             <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             >
//               ← 前へ
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button key={i} onClick={() => setCurrentPage(i + 1)}>
//                   {i + 1}
//                   </button>
//                 ))}
//                 <button
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 >
//                   次へ →
//                   </button>
//                   </div>
//                 )}
//                 </div>
//                 </div>
//                 </div>
//                 );
//                 }




// export default Home;

// import Header from "@/src/components/Header";
import JobFilterClient from "@/src/components/Home/JobFilterClient";
import type { Job } from "@/src/types/job";

const Home = async () => {
  const res = await fetch("http://localhost:3000/api/jobs", {
    cache: "no-store",
  });
  const jobs: Job[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* <Header /> */}
      <JobFilterClient jobs={jobs} />
    </div>
  );
};

export default Home;