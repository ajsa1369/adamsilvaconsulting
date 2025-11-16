import { ArrowRight } from "lucide-react"
import Link from "next/link"


const CaseStudyHero = () => {
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
        <span>Success{" "}</span>
        <span className='text-[#025CA1]'>Case Studies</span>
      </h1>

      {/* Responsive Subtitle */}
      <h2 className='text-lg md:text-xl text-neutral-700 max-w-4xl text-center leading-relaxed'>
       Real-world examples of businesses that have successfully transitioned from traditional SEO to AI authority building, with measurable results and strategic insights.
      </h2>


    </section>
  )
}

export default CaseStudyHero