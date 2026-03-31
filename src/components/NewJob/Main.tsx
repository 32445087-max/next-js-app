"use client";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import type{ Job } from "../../App";

// type Props = {
//     setJobs:React.Dispatch<React.SetStateAction<Job[]>>;
// };


// const Main = ({setJobs}:Props) =>{
const Main = () =>{

    // const navigate = useNavigate();
    const [category,setCategory] = useState("");
    const [salary,setSalary] = useState(0);
    const [title,setTitle] = useState("");

    const Submit = () => {
        if (!title || !category || salary <= 0) {
            alert("全部入力して");
            return;
        }
        fetch("https://job-api-ryk6.onrender.com/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
           body: JSON.stringify({
            title, category, salary
        })
            })
        .then(() => {
            alert("投稿しました");
            window.location.href = "/";
        });
        // const newJob: Job ={
        //     id:Date.now(),
        //     // Dateは、現在の日時を取得するための関数。
        //     title,
        //     category,
        //     salary,
        // };

        // setJobs(prev => [...prev,newJob]);


    }

    return (
    <>
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
        <h2 className="text-xl font-bold mb-4">求人投稿</h2>
        <p className="mb-1">求人カテゴリ選択</p>
        <select className="w-full border p-2 mb-4" onChange={(e) => setCategory(e.target.value)}>
            <option value="">カテゴリを選択▼</option>
            <option value="事務">事務</option>
            <option value="エンジニア">エンジニア</option>
            <option value="営業">営業</option>
            <option value="デザイン">デザイン</option>
            <option value="マーケティング">マーケティング</option>
            <option value="財務・経理">財務・経理</option>
            <option value="人事">人事</option>
            <option value="カスタマーサポート">カスタマーサポート</option>
            <option value="製造">製造</option>
            <option value="医療・介護">医療・介護</option>
        </select>
        <p className="mb-1">年収(万円)</p>
        <input type="number"
        className="w-full border p-2 mb-4"
        step={50}
        min={100}
        onChange={(e) => setSalary(Number(e.target.value))}
        // 文字列を数値に変換するための関数。
        />
        {/* <select name="" id="">
        <option value="">100万円</option>
        <option value="">150万円</option>
        <option value="">200万円</option>
        <option value="">250万円</option>
        <option value="">300万円</option>
        <option value="">350万円</option>
        <option value="">400万円</option>
        <option value="">450万円</option>
        <option value="">500万円</option>
        <option value="">550万円</option>
        <option value="">600万円</option>
        <option value="">650万円</option>
        <option value="">700万円</option>
        <option value="">750万円</option>
        <option value="">800万円</option>
        <option value="">850万円</option>
        <option value="">900万円</option>
        <option value="">950万円</option>
        <option value="">1000万円以上</option>

        </select> */}
        <p className="mb-1">求人タイトル</p>
        <input type="text" onChange={(e) => setTitle(e.target.value)} className="w-full border p-2 mb-6"/>
        <button onClick={Submit} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-4">投稿</button>
        </div>
        </>
        )
    }

export default Main;