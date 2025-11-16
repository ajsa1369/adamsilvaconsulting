import React from 'react'

const Challenge = ({challenge, solution}) => {
  return (
    <section className='mt-10 p-10 flex flex-col md:flex-row items-center justify-center gap-10  '>
     <div className='flex flex-col items-start justify-center gap-5 max-w-1/2 w-full'>
      <h2 className='text-3xl font-bold text-neutral-700'>The Challenge</h2>
       <p className='text-lg text-neutral-600'>{challenge}</p>
     </div>
     <div className="p-8 rounded-2xl max-w-1/2 w-full shadow-xl bg-white flex flex-col items-start justify-center gap-5">
        <h2 className='font-bold text-2xl text-[#0F6CBB]'>Our Solution</h2>
        <p className='text-lg text-neutral-600'>{solution}</p>
     </div>
    </section>
  )
}

export default Challenge