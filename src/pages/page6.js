import React from 'react'
import box6_image from "./src\box6_image.jpg";

export default function Page6() {
  return (
    <div>
      <h1 className="text-center">this is for Pet care</h1><br /><br /><br />
      <img src={box6_image} alt="box6_image"/>
      <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
    </div>
  )
}