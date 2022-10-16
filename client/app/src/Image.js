import React from "react"

export default function ImageFeed({source}){
  return(
    <img alt="Cannot Find Image" src={source} width={window.screen.width} />
  );
}
