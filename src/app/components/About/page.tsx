import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
        <div>
          
        <h1 className="text-4xl font-bold grid place-items-center ">My Awesome Projects are:</h1>
                <h1 className="text-4xl font-bold grid place-items-center ">TODO APP:</h1>
        <div className= "flex items-center justify-center">
     <Image src='/todo1.png' alt='about image' width={200} height={200} >

     </Image>
     </div>
     <h1 className="text-4xl font-bold grid place-items-center ">currency converter</h1>
     <div className= "flex items-center justify-center">
     <Image src='/currency.png' alt='about image' width={200} height={200}>

     </Image>
     </div>
     <h1 className="text-4xl font-bold grid place-items-center ">Timer</h1>
     <div className= "flex items-center justify-center">
     <Image src='/timer.png' alt='about image' width={200} height={200}>

     </Image>
     </div>
     <h1 className="text-4xl font-bold grid place-items-center ">Portfolio</h1>
     <div className= "flex items-center justify-center">
     <Image src='/portf.jpg' alt='about image' width={200} height={200}>

     </Image>
     </div>
     <h1 className="text-4xl font-bold grid place-items-center ">Calculator</h1>
     <div className= "flex items-center justify-center">
     <Image src='/cal.jpg' alt='about image' width={200} height={200}>

     </Image>
     </div>
     <h1 className="text-4xl font-bold grid place-items-center ">ATM App</h1>
     <div className= "flex items-center justify-center">
     <Image src='/atm.jpg' alt='about image' width={200} height={200}>

     </Image>
     </div>

    </div>
  )
}

export default About