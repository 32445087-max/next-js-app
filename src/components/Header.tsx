// import {useNavigate} from "react-router-dom";

// type Props = {
//   setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
// };


// const Header = (props: Props) => {
//     const { setShowModal } = props
//     const navigate = useNavigate();


//     return (
//         <div className="bg-slate-700 text-white flex justify-between px-6 py-4">
//             <h1 className="text-xl font-bold">求人検索アプリ</h1>
//             <div className="space-x-4">
//                 <button onClick={() => setShowModal(true)}>求人検索</button>
//                 <button onClick={() => navigate("/NewJob")}>求人投稿</button>
//             </div>
//         </div>


//     )
// }

// export default Header;

// import { useNavigate } from "react-router-dom";

"use client";

import { useRouter } from "next/navigation";

type Props = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setShowModal }: Props) => {
  // const navigate = useNavigate();
  const router = useRouter();

  return (
    <div className="bg-slate-700 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-xl font-bold">求人検索アプリ</h1>
      <div className="space-x-4 text-sm">
        <button onClick={() => setShowModal?.(true)}>求人検索</button>
        <button onClick={() => router.push("/NewJob")}>求人投稿</button>
      </div>
    </div>
  );
};

export default Header;