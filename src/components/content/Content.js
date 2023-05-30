import React, { useCallback, useEffect } from "react";
import "./Content.scss";
import APIKEY from "../../utils/Apikey";

const Content = () => {
  // useEffect(() => {}, []);
  const getData = useCallback(() => {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`);
        const data = await resp.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);
  return (
    <>
      <button onClick={getData}>Refresh</button>
    </>
  );
};
export default Content;
