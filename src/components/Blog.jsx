import React from 'react'

const Blog = ({titleProp, bodyProp, authorProp}) => {
  return (
    <div className='h-auto m-[200px] border bg-gray-50 '>
      <h1 className='text-4xl font-semibold text-green-950 text-center m-5 uppercase'>{titleProp}</h1>
      <p className='text-xl  '>{bodyProp}</p>

      <p className='mt-4 text-red-950 font-semibold text-xl '>{authorProp}</p>
    </div>
  )
}

export default Blog
