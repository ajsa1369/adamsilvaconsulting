import Research from "./sections/Research"
import ResearchAreas from "./sections/ResearchAreas"
import ResearchCTA from "./sections/ResearchCTA"
import ResearchHero from "./sections/ResearchHero"
import ResearchLibrary from "./sections/ResearchLibrary"


const page = () => {
  return (
    <main className="mb-10">
      <ResearchHero/>
      <Research/>
      <ResearchAreas/>
      <ResearchLibrary/>
      <ResearchCTA/>
    </main>
  )
}

export default page