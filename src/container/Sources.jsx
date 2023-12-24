/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import validation from "../assets/validation2.jpg";
import Redux from "../assets/ReduxTodo.png";
// import portfolio from "../assets/portfolio";
import cart from "../assets/cart.jpg";

const Sources = () => {
  return (
    <div
      name="Work"
      className="w-full md:h-screen bg-[#0f223f] text-gray-300 pt-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#07706b]">
            Work
          </p>
          <p className="py-4 text-lg">//Checkout some of my recent work💦 </p>
          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-12">
            <div
              style={{
                backgroundImage: `url(${validation})`,
              }}
              className="shadow-lg shadow-[#486b9e] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-2xl text-green-300 text-center">
                Portfolio Application
                <div className="text-2xl text-center">
                  <button className="text-center rounded-lg px-2 py-0 m-2 bg-red-300 text-gray-800 font-bold text-lg hover:bg-lime-200">
                    <a href="https://github.com/seyismart/mini-profile">Source Code </a>
                  </button>
                </div>
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${Redux})`,
              }}
              className="shadow-lg shadow-[#486b9e] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-2xl text-green-300 text-center">
                React/Redux Application
                <div className="text-2xl text-center ">
                  <button className="text-center rounded-lg px-2 py-0 m-2 bg-red-300 text-gray-800 font-bold text-lg hover:bg-lime-200  sm:flex text-[#8891b0] text-2xl">
                    <a href="https://github.com/seyismart/reduxAsync-thunk">
                      Code
                    </a>
                  </button>
                  <button className="text-center rounded-lg px-2 py-0 m-2 bg-yellow-200 text-gray-800 font-bold text-lg hover:bg-lime-200">
                    <a href="https://redux-async-thunk.vercel.app"> Demo</a>
                  </button>
                </div>
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${cart})`,
              }}
              className="shadow-lg shadow-[#486b9e] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <span className="font-bold text-2xl text-green-300 text-center">
                RTK shopping Application
                <div className="text-2xl text-center">
                  <button className="text-center rounded-lg px-2 py-0 m-2 bg-yellow-200 text-gray-800 font-bold text-lg hover:bg-lime-200">
                    <a href="https://shopping-redux-tk.vercel.app"> Demo</a>
                  </button>
                  <button className="text-center rounded-lg px-2 py-0 m-2 bg-red-300 text-gray-800 font-bold text-lg hover:bg-lime-200">
                    <a href="https://github.com/seyismart/shopping_ReduxTk.git">
                      Code
                    </a>
                  </button>
                </div>
              </span>
            </div>
          </div>

          {/* Hover show */}
        </div>
      </div>
    </div>
  );
};

export default Sources;
