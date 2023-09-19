/* eslint-disable react/prop-types */
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../../styles";

function Comment({ userName, comment }) {
  return (
    <div className="px-4 py-4 w-full bg-transparent border-[1px] border-white  rounded-xl ">
      <div
        className={`rounded-2xl flex items-center px-4 py-1 xs:w-[40%] md:w-[15%]   bg-white`}
      >
        <FontAwesomeIcon icon={faUser} />
        <h3 className="ml-2">{userName}</h3>
      </div>
      <p className="rounded-2xl px-4 py-2 mt-3 bg-white">{comment}</p>
    </div>
  );
}

export default Comment;
