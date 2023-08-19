import React from 'react'
import box7_image from "./src\box7_image.jpg";

export default function Page7() {
  return (
    <div>
      <h1 className="text-center">this is for New Arivals in Toys</h1><br /><br /><br />
      <img src={box7_image} alt="box7_image"/>
      <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
    </div>
  )
}