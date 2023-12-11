import React from "react";
import Links from "./Links";

function About({bio,links}) {
  // if ((props.bio === null) || (props.bio===" ")){

  //   return (
  //     <div id="about">
  //       <h2>About Me</h2>
  //       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //       {/* add your <Links /> component here */}
  //       <Links github={links.github} linkedin={links.linkedin} />
  //     </div>
  //   );
  // }
  // else{ 
  //   return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     <p>{props.bio}</p>
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     {/* add your <Links /> component here */}
  //     <Links github={links.github} linkedin={links.linkedin} />
  //   </div>
  // );}

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin ={links.linkedin} />
      
      {/* <a href={links.github}>{links.github}</a>
      <p>{links.linkedin} </p> */}
    
    </div>
  );
  
 
}

export default About;
