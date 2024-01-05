import React from 'react'

const Home = () => {
  return (
    <section className='w-full h-[calc(100vh-4rem)] flex justify-center items-center'>
        <article className='w-[80%] h-[80%] rounded-md'>
        <h1 className='font-bold text-6xl text-center text-blue-950'>Demonstration of React-Router</h1>
        <div className='w-full h-full  p-20 flex items-center justify-center'>
            <p className='w-[80%] h-full text-xl leading-8 text-blue-800'>React Router enables "client side routing".
<br />
In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
<br />
This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.</p>
        </div>
        </article>
    </section>
  )
}

export default Home