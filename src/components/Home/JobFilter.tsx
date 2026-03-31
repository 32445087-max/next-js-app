type Props = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
  setMinSalary: React.Dispatch<React.SetStateAction<number>>;
//   setKeyword: React.Dispatch<React.SetStateAction<string>>;
 setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
 setKeyword: React.Dispatch<React.SetStateAction<string>>;
};



// 下returnまで

const JobFilter = ({ setSelectedCategory,setMinSalary, setCurrentPage}: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value;
        setSelectedCategory((prev) =>
            e.target.checked
            ? [...prev, value]
            : prev.filter((v) => v !== value)
  );
  setCurrentPage(1);
};

    return(
        <>
        <h2 className="font-bold mb-2">求人カテゴリ</h2>
        <div className="space-y-2 mb-6">
            <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="事務"
            onChange={handleChange}/>
            事務
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="エンジニア"
            onChange={handleChange}/>
            エンジニア
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="営業"
            onChange={handleChange}/>
            営業
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="デザイン"
            onChange={handleChange}/>
            デザイン
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="マーケティング"
            onChange={handleChange}/>
            マーケティング
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="財務・経理"
            onChange={handleChange}/>
            財務・経理
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="人事"
            onChange={handleChange}/>
            人事
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="カスタマーサポート"
            onChange={handleChange}/>
            カスタマーサポート
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="製造"
            onChange={handleChange}/>
            製造
            </label>
        <label className="flex items-center gap-2">
            <input
            type="checkbox"
            value="医療・介護"
            onChange={handleChange}/>
            医療・介護
            </label>
        </div>


            <h2 className="font-bold mb-2">年収</h2>
            <select
            className="w-full border p-2 rounded"
            onChange={(e) => {
            setMinSalary(Number(e.target.value));
                setCurrentPage(1);
            }}
            >
            <option value={0}>指定なし</option>
            <option value={300}>300万円以上</option>
            <option value={400}>400万円以上</option>
            <option value={500}>500万円以上</option>
            <option value={600}>600万円以上</option>
            </select>
        </>
    )
}

export default JobFilter;