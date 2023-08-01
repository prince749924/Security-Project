import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const AdminNavber = (props) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">
        {/*  Large Screen Show  */}

        {/*  Large Screen Show  */}
        <div className="hidden lg:block">
          <span
            onClick={(e) => history.push("/admin/dashboard")}
            style={{ letterSpacing: "0.70rem" }}
            className="flex items-left text-center font-bold uppercase text-black text-2xl cursor-pointer px-2 text-center"
          >
            Admin Dashboard
          </span>
        </div>
        {/* Small Screen Show */}
        <div className="lg:hidden flex items-center">
          <svg
            id="hamburgerBtn"
            className="lg:hidden w-8 h-8 cursor-pointer text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span
            onClick={(e) => history.push("/admin/dashboard")}
            style={{ letterSpacing: "0.10rem" }}
            className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            Admin Dashboard
          </span>
        </div>
        {/* Both Screen show */}

        {/* Mobile Navber */}
        {/* End Mobile Navber */}
      </nav>
    </Fragment>
  );
};

export default AdminNavber;
