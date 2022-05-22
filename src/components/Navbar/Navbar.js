import { BiLineChart } from "react-icons/bi"
import { BiInfoCircle } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom";



const Navbar = () => {

  let location = useLocation()

  return (
    <div className="w-full bg-blue-500 sticky top-0 right-0 z-20">
      <div className="w-full container flex py-4 px-4">
        <div className="w-1/6 flex items-center justify-start">
          {location.pathname === "/" ? <Link to="/Charts"><BiLineChart className="text-white text-2xl cursor-pointer" /></Link> : <Link to="/">
            <BiChevronRight className="text-white text-3xl cursor-pointer" />
          </Link>}
        </div>
        <div className="w-4/6 flex items-center justify-center">
          <span className="font-sans font-bold text-white text-lg select-none">
            {(location.pathname === "/DepositToCart" && "واریز به حساب") || (location.pathname === "/" && "صورت حساب") || (location.pathname === "/RemoveFromCart" && "برداشت از حساب") || (location.pathname === "/Charts" && "خرج و مخارج")}
          </span>
        </div>
        <div className="w-1/6 flex items-center justify-end">
          <BiInfoCircle className="text-white text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;