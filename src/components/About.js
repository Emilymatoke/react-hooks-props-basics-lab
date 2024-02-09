import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>props? props.bio : null</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
