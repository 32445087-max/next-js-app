import Header from "@/src/components/Header";
import Main from "@/src/components/NewJob/Main";
// import type{ Job } from "../App";

// Typeは、「この変数(や値など)は{}内の型を使う」というルールを決めるための物。

// このコードは、Job[]の更新用関数のみ入る型を定義している。
// Propsは常にオブジェクトで渡されるから、オブジェクトで定義した。

// type Props = {
//   setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
// };
//     // TS内部では<>の中身は型を書く。このことをジェネリクスという。
//     // React：Reactというライブラリを今使っているが、そのReact本体のこと。
//     // Dispatch：更新用関数の型。
//     // SetStateAction：型の種類の1つ。更新用関数に渡せる型を表すための型。SetStateAction<型名>このように使う。
//     // Dispatchは「更新用関数そのものの型」、SetStateActionは「その関数に渡してよい値の型」。


// ここでの{}は、分割代入。
// const NewJob = ({setJobs}: Props) => {
    // 引数{setJobs}の型はProps。

    const NewJob = () => {
        return (
        <>
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <div className="max-w-6xl mx-auto mt-6">
                <Main/>
                {/* <Main setJobs={setJobs}/> */}
            </div>
        </div>
        </>
    )
    // const navigate = useNavigate();

    // const [category,setCategory] = useState("");
    // const [salary,setSalary] = useState<number>(0);
    // const [title,setTitle] = useState("");




}

export default NewJob;


// Dispatchで更新用関数が入るというのを決め
// stateActionで更新用関数に渡す型を決め
// Jobという型を用いている。リストで入れる。


// この説明のないが違うのか？


// 結論のみ端的に回答して