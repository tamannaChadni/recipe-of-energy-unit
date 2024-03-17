import coverImage from "../../assets/cover.jpg";
import profileImage from "../../assets/frame.png";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="container">
      {/* navbar */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-extrabold lg:text-3xl lg:font-bold">
            Recipe of Energy Unit
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a> Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="form-control hidden lg:block  bg-gray-100 p-3 m-3 rounded-2xl ">
            <div className="flex gap-1  items-center">
              <IoSearchOutline></IoSearchOutline>
              <p>Search</p>
            </div>
          </div>
          <div className="w-10 hidden lg:block">
            <img
              className="bg-green-400 rounded-full"
              alt=""
              src={profileImage}
            />
          </div>
        </div>
      </div>
      {/* navbar */}
      {/* banner */}
      <div
        className="hero min-h-screen rounded-xl"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold ">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Building more sustainable and equitable food systems through a
              farm-to-institution model. provide the next generation of
              institutional cooks and program staff with knowledge.
            </p>
            <div className=" space-x-5">
              <button className="btn  bg-green-600 text-white">
                Explore Now
              </button>
              <button className="btn  bg-red-50">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
