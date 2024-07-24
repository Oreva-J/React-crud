import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
  const [title, setTitle] = useState("")
  const [blogBody, setBlogBody] = useState("")
  const [author, setAuthor] = useState("")
  const endPoint = "http://localhost:3000/blogs"

  const navHome = useNavigate()

  const addBlog = async (e) => {
    e.preventDefault()
    if (!title || !blogBody || !author) {
      alert('Fill in all fields')
      return // This ensures the function stops here if the fields are not filled
    }

    try {
      const newBlog = { title, blogBody, author }

      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // converting newBlog to JSON format
        body: JSON.stringify(newBlog)
      })

      if (!response.ok) {
        alert('Failed to add new blog')
      } else {
        alert("Blog added successfully")
        navHome('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='m-[300px] flex justify-center '>
      <form action="" className='flex flex-col w-[500px]  ' onSubmit={addBlog}>

        <label htmlFor="">Blog title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} className='border border-black' />

        <label htmlFor="">Blog body</label>
        <textarea onChange={(e) => setBlogBody(e.target.value)} name="" id="" value={blogBody} className='border border-black' cols={40} rows={10}></textarea>

        <label htmlFor="">Author:</label>
        <input onChange={(e) => setAuthor(e.target.value)} type="text" value={author} className='border border-black' />

        <button className='w-[20%] border border-black bg-black text-white'>Submit Blog</button>

      </form>
    </div>
  )
}

export default Create
