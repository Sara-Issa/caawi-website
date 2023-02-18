import React from "react";
import { Link } from "react-router-dom";

function Article() {
  return (
    <div className="sm:mb-[30rem]">
      {" "}
      <div className="font-bold text-3xl ml-96 sm:ml-14 sm:text-2xl">
        Read Our{" "}
        <span className="text-yellow-400  sm:text-3xl text-4xl">Articles</span>{" "}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 w h-screen px-5 py-10 sm:px-2">
        <div className=" w-[30rem] sm:w-full ">
          <img src="/pic2.jpeg" className="w-full mb-10 sm:mb-5" />
          <p className="uppercase font-bold sm:text-lg text-xl">
            Title img elements must have
          </p>
          <p className="mt-5 sm:mt-2">
            img elements must have an alt prop, either with meaningful text, img
            elements must have an alt prop, either with meaningful text,with
            meaningful text,
          </p>
        </div>
        <div className="ml-14 sm:ml-0  sm:mt-7">
          <div className=" flex items-center sm:flex-col w-full border shadow px-5 py-5 sm:px-2 sm:py-8  mb-4">
            {" "}
            <img
              src="/article.png"
              className="w-14 h-14 mr-5 sm:w-12 sm:h-12 sm:mr-5 sm:mb-3 "
            />
            <div className="flex flex-col">
              <p className=" font-bold text-lg sm:font-semibold sm:text-mg">
                Title img elements must have an
              </p>
              <p className="text-sm text-gray-600">
                title img elements must have antitle img elements must have an
                title img e
              </p>
            </div>
          </div>
          <div className=" flex items-center sm:flex-col w-full border shadow px-5 py-5 sm:px-2 sm:py-8  mb-4">
            {" "}
            <img
              src="/article.png"
              className="w-14 h-14 mr-5 sm:w-12 sm:h-12 sm:mr-5 sm:mb-3 "
            />
            <div className="flex flex-col">
              <p className=" font-bold text-lg sm:font-semibold sm:text-mg">
                Title img elements must have an
              </p>
              <p className="text-sm text-gray-600">
                title img elements must have antitle img elements must have an
                title img e
              </p>
            </div>
          </div>
          <div className=" flex items-center sm:flex-col w-full border shadow px-5 py-5 sm:px-2 sm:py-8  mb-4">
            {" "}
            <img
              src="/article.png"
              className="w-14 h-14 mr-5 sm:w-12 sm:h-12 sm:mr-5 sm:mb-3 "
            />
            <div className="flex flex-col">
              <p className=" font-bold text-lg sm:font-semibold sm:text-mg">
                Title img elements must have an
              </p>
              <p className="text-sm text-gray-600">
                title img elements must have antitle img elements must have an
                title img e
              </p>
            </div>
          </div>

          <Link to="/Article/List">
            {" "}
            <div className=" flex items-center bg-teal-400 px-4 py-2 w-1/3 sm:w-1/2 mt-5 rounded-md text-white font-bold ml-72 sm:ml-20">
              Read more
              <img src="/right-arrows.png" className="w-4 ml-2 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
