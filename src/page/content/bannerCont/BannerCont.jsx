import React from "react";
import "./bannerCont.css";

export default function BannerCont() {
  return (
    <>
      <div className="banner">
        <div className="max-width">
          <div className="banner-contents">
            <p className="today">
              May <em>25</em> Wednesday
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
