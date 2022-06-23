import React from "react";
import Author from "../../../components/author/Author";
import Category from "../../../components/category/Category";
import BtnBack from "../btnBack/BtnBack";
import BtnGroup from "../btnGroup/BtnGroup";
import InnerCont from "../InnerCont/InnerCont";
import LikeBtn from "../likeBtn/LikeBtn";
import "./postCont.css";

export default function PostCont() {
  return (
    <div className="view">
      <div className="max-width">
        <section className="wrap-box">
          <div className="inner">
            <Author />
            <Category />
            <div class="title-wrap">
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <LikeBtn />
            </div>
            <hr />
            <InnerCont />
            <BtnGroup />
            <BtnBack />
          </div>
        </section>
      </div>
    </div>
  );
}
