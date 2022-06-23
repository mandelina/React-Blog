import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Router } from "react-router-dom";
import axios from "axios";

export default function Homepage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => {
      console.log(res);
      setItems(res);
      // setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </>
  );
}
