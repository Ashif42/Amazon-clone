import React from 'react'
import box1_image from "./src\box2_image.jpg";

export default function Page2() {
  return (
    <div>
        <h1 className="text-center">this is for Health and personal care </h1><br /><br /><br />
        <img src={box1_image} alt="box1_image"/>
        <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
    </div>
  )
}
