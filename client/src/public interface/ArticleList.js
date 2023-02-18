import React from "react";
import { Link } from "react-router-dom";
function ArticleList() {
  return (
    <div className="py-10 md:mb-96">
      <div className="text-3xl font-bold mb-5">
        News <span className="text-yellow-400">& </span>Articles
      </div>
      <Link to="/Article/List/Detail">
        <div className="flex px-5  md:flex-wrap h-44 mb-3">
          <div>
            <img src="/pic1.jpeg" className="rounded-lg w-full h-full" />
          </div>
          <div className="w-full shadow ml-5 md:m-0 md:mt-3 rounded-md px-5 py-5">
            <p className="text-2xl font-bold "> Title img elements must have</p>
            <p className="text-md text-gray-600 mt-3">
              {" "}
              - Title img elements must have Title img elements Title img
              elements.
              <br />- Title img elements must have Title img elements Title img
              elements. <br />- Title img elements must have Title img elements
              Title .
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArticleList;
