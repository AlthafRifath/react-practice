import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";
import ComponentC from "./assets/ComponentC.jsx";

function ComponentB() {

    const user = useContext(UserContext);

  return (
      <div className="box">
          <h1>Component B</h1>
          <h2>{`Holaa ${user}`}</h2>
          <ComponentC/>
      </div>
  );
}

export default ComponentB;