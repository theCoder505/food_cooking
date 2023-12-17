// components/Layout.js

import { useEffect, useState } from "react";
import MainHeader from "./headers/MainHeader";
import axios from "axios";

const Layout = ({ children }) => {
  var isLoggedIns = false;

  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      isLoggedIns = true;
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/api/category/recipe`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

    <MainHeader isLoggedIns={isLoggedIns} data={data}/>

    <main>{children}</main>
  </>

  );
};

export default Layout;
