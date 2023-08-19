import React from 'react'
import box5_image from "./src\box5_image.jpg";

export default function Page5() {
  return (
    <div>
      <h1 className="text-center">this is for Beauty products</h1><br /><br /><br />
      <img src={box5_image} alt="box5_image"/>
      <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
    </div>
  )
}