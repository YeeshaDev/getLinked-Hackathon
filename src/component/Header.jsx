import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Header() {
  const path = useLocation();

  let [open, setOpen] = useState(false);

  //This closes the mobile navigation as the user changes path/pages.
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <header className=" py-3 relative z-50">
      {/* DESKTOP Navigation */}
      <nav className=" hidden lg:flex items-center justify-between px-5 mx-10">
        <Link to="/">
          <h1 className="text-white font-bold text-[20px] md:text-[36px]">
            get<span className="text-lilac">linked</span>
          </h1>
        </Link>
        <div className="flex items-center justify-between gap-10">
          <ul className="text-white flex items-center justify-center gap-5 lg:mt-4">
            <li>
              <a href="#timeline">Timelines</a>
            </li>
            <li>
              <a href="#overview">Overviews</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
          <div>
            <Link to="/register">
              <button className="register-btn bg-primaryGradient w-[150px] h-10 text-white">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE Navigation */}
      <nav className=" flex lg:hidden items-center justify-between px-5 mx-3 md:mx-10">
        <Link to="/">
          <h1 className="text-white font-bold text-[20px] md:text-[36px]">
            get<span className="text-lilac">linked</span>
          </h1>
        </Link>

        <div className="flex flex-col items-center justify-between gap-10">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute z-[99] text-white right-8 top-6 cursor-pointer lg:hidden "
          >
            <div>
              {open ? (
                <span className="icon text-[19px]">
                  <HiXMark />
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 19 14"
                    fill="none"
                  >
                    <path
                      d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
                      fill="white"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className=" mobile-nav flex flex-col">
            <ul
              className={`lg:hidden  pb-12 absolute gap-8   lg:z-auto z-[1] left-0 w-full  pl-9 transition-all duration-500 ease-in ${
                open
                  ? "top-[0] bg-mainBg shadow-lg  z-[50]"
                  : "top-[-390px] bg-mainBg z-[99]"
              }`}
            >
              <li className="!mt-20">
                <a href="#timeline">Timelines</a>
              </li>
              <li>
                <a href="#overview">Overviews</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>{" "}
              </li>
              <Link to="/register">
                <button className="register-btn bg-primaryGradient w-[150px] h-10 text-white mt-5">
                  Register
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="relative bg-customWhite h-[0.8px] border-none w-full  mt-5" />
    </header>
  );
}
