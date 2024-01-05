import React from 'react'

const About = () => {
  return (
    <section className='w-full h-[calc(100vh-4rem)] flex justify-center items-center'>
        <article className='w-[80%] h-[80%] rounded-md'>
        <h1 className='font-bold text-6xl text-center text-blue-950'>This will Render Services-section</h1>
        <div className='w-full h-full  p-20 flex items-center justify-center'>
            <p className='w-[80%] h-full text-xl leading-8 text-blue-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda distinctio, doloribus provident magnam quis molestias saepe cum, accusamus doloremque, quasi quae reprehenderit laboriosam. Illo eligendi aut, aperiam nobis minus dolores optio mollitia necessitatibus. Aliquam, laborum sint? Amet exercitationem dicta, voluptate odio eaque laborum labore perspiciatis.
            </p>
        </div>
        </article>
    </section>
  )
}

export default About