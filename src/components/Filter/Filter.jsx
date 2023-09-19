function Filter() {
  return (
    <div className="flex justify-evenly items-center py-5">
      <div className="flex bg-textPrimary rounded-xl p-1 font-bold gap-3 ss:flex-row items-center justify-center">
        <label>Category</label>
        <select
          value="category"
          className="outline-none border-none bg-transparent"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i} value={i} className="bg-bgDArk text-textPrimary">
              i
            </option>
          ))}
        </select>
      </div>
      <div className="flex bg-textPrimary rounded-xl p-1 font-bold gap-3 ss:flex-row items-center justify-center">
        <label>Category</label>
        <select
          value="category"
          className="outline-none border-none bg-transparent"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i} value={i} className="bg-bgDArk text-textPrimary">
              i
            </option>
          ))}
        </select>
      </div>
      <div className="flex bg-textPrimary rounded-xl p-1 font-bold gap-3 ss:flex-row items-center justify-center">
        <label>Category</label>
        <select
          value="category"
          className="outline-none border-none bg-transparent"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i} value={i} className="bg-bgDArk text-textPrimary">
              i
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
