import React from 'react'
import image1 from "./box1_image.jpg";

export default function Page1() {
  return (
  <>
         <h1 className="text-center">this is for Cloths </h1><br />
         <img src={image1} alt="image" /> <br /><br />
         <h3 className="text-center"><a href="/">click here to go to home page</a></h3>
  </>
  )
}
