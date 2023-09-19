/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const menuLinks = [
  { id: 1, title: "home" },
  { id: 2, title: "shop" },
  { id: 3, title: "blog" },
  { id: 4, title: "contact" },
];
function Menu({ style }) {
  return (
    <ul className={`ss:flex  ss:gap-x-6 ${style}`}>
      {menuLinks.map((item, i) => (
        <li key={item.id} className="text-center w-full ">
          <NavLink
            to={item.title !== "home" ? `/${item.title}` : "/"}
            className={`ss:border-none hover:text-orange-200 w-full text-gray-900 navlink  px-3  border-gray-400  pb-2 ss:pb-0 ss:text-[22px] text-[18px] ${
              i === menuLinks.length - 1 ? "" : "border-b-[1px]"
            }  rounded-none`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
