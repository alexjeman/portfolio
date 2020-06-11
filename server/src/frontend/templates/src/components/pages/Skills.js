import React from "react";
import Cube from "../layout/Cube";

const Skills = () => {
  return (
    <div className='page-content-container'>
      <div className='skills'>
        <h1>Skills {"{"}</h1>
        <h2>React, SASS, JavaScript, Node.js, Python, Django</h2>
        <h2>PostgreSQL</h2>
        <h1>{"}"}</h1>
        <Cube />
      </div>
    </div>
  );
};

export default Skills;
