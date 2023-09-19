/* eslint-disable react/prop-types */
function Button({ children, onClick, style, type }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button
      type={type || "button"}
      className={`outline-none border-none rounded-2xl bg-green-500 hover:bg-green-700 hover:text-textPrimary px-3 py-1 font-bold text-[#1d1d1d] ${style}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
}

export default Button;
