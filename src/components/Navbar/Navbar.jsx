import { useState } from "react";
import CartStatus from "./CartStatus";
import Logo from "./Logo";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faGripLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-light fixed top-0 left-0 right-0 h-[10vh] z-50">
      <div className="ss:flex hidden h-full px-8 py-4  justify-between items-center w-full ">
        <Logo />
        <Menu />
        <div className="flex items-center gap-7">
          <Link to="/login">
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer text-[20px]"
            />
          </Link>
          <CartStatus />
        </div>
      </div>
      <div className="flex ss:hidden h-[40%] px-8 py-4  justify-between items-center w-full ">
        {open && (
          <Menu
            style={
              " fixed  top-[11%] grid grid-flow-row justify-center items-center gap-4 py-4 rounded-[18px] left-1  dark:bg-[rgba(0,0,0,0.7)] bg-light"
            }
          />
        )}
        <FontAwesomeIcon
          icon={open ? faClose : faGripLines}
          className="text-textSecondary font-bold text-[20px]"
          onClick={() => setOpen((prev) => !prev)}
        />
        <Logo />
        <CartStatus />
      </div>
    </nav>
  );
}

export default Navbar;
