import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
//import Navbar from '../components/Navbar'


const Home = () => {
  const [blogs, setBlogs] = useState("")
  const endPoint = "http://localhost:3000/blogs"
  const fetchBlog = async () =>{
    try{
      const response = await fetch(endPoint)
      const convertedResponse = await response.json()
      setBlogs(convertedResponse)
    } catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchBlog()
  },[])

  return (
    <div>
        {
          blogs && blogs.map((blog)=>(
            <Blog key={blog.id} titleProp={blog.title} bodyProp={blog.body} authorProp={blog.author} />
          ))
        }

    </div>
  )
}

export default Home
