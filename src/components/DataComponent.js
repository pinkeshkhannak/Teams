import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card";

const URL = "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098";
export const DataComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="text-3xl pl-5 pr-5 m-3 text-gray-600 font font-bold">
        Administrators
      </div>
      <Card data={data} admin={true} />
      <div className="text-3xl pl-5 pr-5 m-3 text-gray-600 font font-bold">
        Members
      </div>
      <Card data={data} admin={false} />
    </>
  );
};
