import { useRef } from "react";
import { styles } from "../../styles";
import Button from "../UI/Button";
function SingUp({ onChangeStatus }) {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  return (
    <div className="h-full flex items-center justify-center flex-row-reverse">
      <div className="h-full w-full relative">
        <img src="signup.jpg" className="w-full h-full object-contain" />
      </div>
      <div className={`h-full w-[70%]  ${styles.flexCenter} flex-col gap-7`}>
        <form
          className={`relative ${styles.flexCenter} justify-between  flex-col gap-5 h-[90%] w-[80%] border-[1px] rounded-3xl border-gray-500 shadow p-7`}
        >
          <h1 className="text-[22px] text-textSecondary  font-bold">Sign Up</h1>
          <Button style="absolute top-7 left-4" onClick={onChangeStatus}>
            Login
          </Button>
          <div className="h-full flex flex-col gap-6   items-center justify-evenly">
            <div className="w-full flex items-center gap-3">
              <div className="relative">
                <label className="text-gray-800 absolute  text-[17px] -top-[27px] ">
                  First Name:
                </label>
                <input
                  required
                  ref={firstNameRef}
                  type="text"
                  className="border-[1px] border-gray-400 focus::border-none px-2 py-1 rounded-lg outline-none  text-gray-400 form-input"
                  placeholder="Your Name"
                />
              </div>
              <div className="relative">
                <label className="text-gray-800 absolute  text-[17px] -top-[27px] ">
                  Last Name:
                </label>
                <input
                  required
                  ref={lastNameRef}
                  type="text"
                  className="border-[1px] border-gray-400 focus::border-none px-2 py-1 rounded-lg outline-none  text-gray-400 form-input"
                  placeholder="Your Last Name"
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="relative">
                <label className="text-gray-800 absolute  text-[17px] -top-[27px] ">
                  User Name:
                </label>
                <input
                  required
                  ref={userNameRef}
                  type="text"
                  className="border-[1px] border-gray-400 focus::border-none px-2 py-1 rounded-lg outline-none  text-gray-400 form-input"
                  placeholder="User Name"
                />
              </div>
              <div className="relative">
                <label className="text-gray-800 absolute  text-[17px] -top-[27px] ">
                  Password:
                </label>
                <input
                  required
                  ref={passwordRef}
                  type="password"
                  className="border-[1px] border-gray-400 focus::border-none px-2 py-1 rounded-lg outline-none  text-gray-400 form-input"
                  placeholder="Your Password"
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="relative">
                <label className="text-gray-800 absolute  text-[17px] -top-[27px] ">
                  Email:
                </label>
                <input
                  required
                  ref={emailRef}
                  type="email"
                  className="border-[1px] border-gray-400 focus::border-none px-2 py-1 rounded-lg outline-none  text-gray-400 form-input"
                  placeholder="User Email"
                />
              </div>
              <div className="relative">
                <label className="text-gray-800 absolute  text-[17px] -top-[27px] ">
                  Phone:
                </label>
                <input
                  required
                  ref={phoneRef}
                  type="tel"
                  className="border-[1px] border-gray-400 focus::border-none px-2 py-1 rounded-lg outline-none  text-gray-400 form-input"
                  placeholder="Your P-Number"
                />
              </div>
            </div>
          </div>
          <Button type="submit" style="w-[70%] py-1">
            Login
          </Button>
          <span
            onClick={onChangeStatus}
            className="cursor-pointer text-gray-600 hover:text-textSecondary"
          >
            Already Have Account?
          </span>
        </form>
      </div>
    </div>
  );
}

export default SingUp;
