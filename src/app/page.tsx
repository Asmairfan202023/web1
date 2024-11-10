import Image from 'next/image'
import React from 'react'
import Header from './components/header/page'

const Home = () => {
  return (
    <main>
      <Header/>
     <section className="p-4">
    
      <div className="container">
    <div className=" bg-gray-100 text-center p-8">
   <h1 className="text-4xl font-bold">Porfolio</h1>
   <h1 className="text-4xl font-bold">I AM ASMA IRFAN</h1>
        <div className='port'>
     <Image src='/image1.jpg' alt='about image' width={200} height={200} 
     className='rounded-full'>

     </Image>
     <p>"I’m a dedicated and creative web developer with a background in computer science and a passion for building intuitive, user-focused applications. With over a decade of experience in teaching and developing, I specialize in creating responsive, high-performance web applications using modern frameworks like Next.js and Tailwind CSS. My portfolio showcases a diverse range of projects, each designed to solve real-world challenges with thoughtful design and robust functionality. I’m always eager to learn new technologies and push the boundaries of what's possible, aiming to create impactful digital experiences that leave a lasting impression."</p>
     </div>
     </div>

      </div>
  
  
     </section>
     </main>

  )
}

export default Home