import Head from "next/head";
import { useEffect, useState } from "react";

import AccLandingPage from "./AccLandingPage";
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() =>   import('../pages/AccLandingPage'), { ssr: true })
export default function Home() { 

  const [userId, setUserId] = useState("");
  useEffect(() => {
    let item = localStorage.getItem("user");  
    item = JSON.parse(item);
    const id = item?.id;
    setUserId(id); 
  }, []);
  return (
    <>
    <NoSSR userId={userId}/>
      {/* <AccLandingPage userId={userId} /> */}
    </>
  );
}
