import React from "react";
import Header from "../../components/header/Header";
import BannerCont from "./bannerCont/BannerCont";
import PostCont from "./postCont/PostCont";
import Footer from "../../components/footer/Footer";

export default function Contents() {
  return (
    <>
      <BannerCont />
      <PostCont />
      <Footer />
    </>
  );
}
