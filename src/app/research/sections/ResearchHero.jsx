

const ResearchHero = () => {
 return (
    <section 
      className='flex items-center justify-center flex-col gap-8 md:min-h-[80vh] p-8 text-center'
      style={{
        // Gradient background from white (top left) to blue-200 (bottom right)
        background: 'linear-gradient(to bottom right, #ffffff, #bfdbfe)' 
      }}
    >
      {/* Responsive Heading */}
      <h1 className='text-black text-4xl sm:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight drop-shadow-sm'>
        <span>Research{" "}</span>
        <span className='text-[#025CA1]'>Hub</span>
      </h1>

      {/* Responsive Subtitle */}
      <h2 className='text-lg md:text-xl text-neutral-700 max-w-4xl text-center leading-relaxed'>
       Original research, data analysis, and strategic insights driving the evolution from traditional SEO to AI-powered authority building.
      </h2>


    </section>
  )
}

export default ResearchHero