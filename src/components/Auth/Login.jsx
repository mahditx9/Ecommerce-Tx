import { useRef } from "react";
import { faLock, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { styles } from "../../styles";
function Login({ onChangeStatus }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-full w-full relative">
        <img src="signin.jpg" className="w-full h-full object-contain" />
      </div>
      <div className={`h-full w-[70%]  ${styles.flexCenter} flex-col gap-7`}>
        <form
          className={`relative ${styles.flexCenter} justify-between self-start flex-col gap-5 h-[70%] w-[80%] border-[1px] rounded-3xl border-gray-500 shadow p-7`}
        >
          <h1 className="text-[22px] text-textSecondary  font-bold">
            Register
          </h1>
          <Button style="absolute top-3 right-3" onClick={onChangeStatus}>
            Sign Up
          </Button>
          <FontAwesomeIcon
            icon={faUser}
            className="w-[150px] h-[100px] text-gray-600 mt-2"
          />
          <div className="h-full flex flex-col gap-7  items-center justify-center">
            <div className="relative">
              <FontAwesomeIcon
                className="text-gray-800 absolute  text-[17px] top-[13px] left-[8px]"
                icon={faSignIn}
              />
              <input
                required
                ref={emailRef}
                type="email"
                className="border-[1px] border-gray-400 focus::border-none px-2 py-2 rounded-lg outline-none  text-gray-400 form-input"
                placeholder="Your Email"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon
                className="text-gray-800 absolute text-[17px] top-[12px] left-[9px]"
                icon={faLock}
              />
              <input
                required
                ref={passwordRef}
                type="password"
                className="border-[1px] border-gray-400 focus::border-none px-2 py-2 rounded-lg outline-none  text-gray-400 form-input"
                placeholder="Your Password"
              />
            </div>
          </div>
          <Button type="submit" style="w-[50%]">
            Login
          </Button>
          <span className="cursor-pointer text-gray-600 hover:text-textSecondary">
            Forgot Your Password?
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
