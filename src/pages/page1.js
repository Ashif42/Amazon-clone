import React from 'react'
import box1_image from "./src\box1_image.jpg";

export default function Page1() {
  return (
  <>
         <h1 className="text-center">this is for Cloths </h1><br /><br /><br />
         <img src={box1_image} alt="box1_image"/>
         <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
  </>
  )
}
