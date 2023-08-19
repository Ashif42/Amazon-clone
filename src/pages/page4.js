import React from 'react'
import box4_image from "./src\box4_image.jpg";

export default function Page4() {
  return (
    <div>
      <h1 className="text-center">this is for Electronice</h1><br /><br /><br />
      <img src={box4_image} alt="box4_image"/>
      <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
    </div>
  )
}