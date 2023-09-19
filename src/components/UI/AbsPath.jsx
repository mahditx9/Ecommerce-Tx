import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

// eslint-disable-next-line react/prop-types
const AbsPath = memo(function AbsPath({ children }) {
  return (
    <div className="inline-flex items-center ss:w-[55%] md:w-[20%] xs:w-[65%] w-[90%] mx-auto ss:mx-0 gap-3 px-3 py-2 rounded-xl bg-white dark:bg-bgDArk text-textSecondary dark:text-textPrimary">
      <FontAwesomeIcon icon={faRoute} className="text-[17px]" />
      <h4 className="text-[17px] text-textSecondary tracking-wide">
        {children}
      </h4>
    </div>
  );
});
export default AbsPath;
