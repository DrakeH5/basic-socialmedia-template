import React, { useEffect, useState } from "react"
import Image from "./Image.js"

export default function ImageFeed(){

  const [images, setImages] = useState([{}])

  useEffect(() => {
      fetch("/retriveImage").then(
        response => response.json()
      ).then(
        data => {
          var i = 0;
          while(i<data.length){
          fetch(data[i]).then(
            response => response.url
          ).then(
            data => {
              setImages(prevImages => {
                return [...prevImages, data]
              })
            },
          )
          i++;
        }
      }
    )
  }, [])

  return(
    images.map(src => {
      if(src.length>0){
        return <Image key={src} source={src} />
      }
    })
  );
}
