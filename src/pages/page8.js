import React from 'react'
import box8_image from "./src\box8_image.jpg";

export default function Page8() {
  return (
    <div>
      <h1 className="text-center">this is for Latest Fasion Trends</h1><br /><br /><br />
      <img src={box8_image} alt="box8_image"/>
      <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
    </div>
  )
}