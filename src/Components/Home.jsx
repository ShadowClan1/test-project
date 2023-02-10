import React, { useContext, useEffect, useState } from "react";
import Context1 from "./context/Context1";
import Show from "./Show";

function Home() {
  const context = useContext(Context1);
  const { getDetails, data } = context;

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="Home mt-3 ">
      <div className="flex flex-col gap-2 md:flex-row md:flex-wrap   ">
        {data.map((element) => {
          return <Show data={element} />;
        })}
      </div>

      <div></div>
    </div>
  );
}

export default Home;
