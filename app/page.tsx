import "./page.css"
import { CourseCard } from "./../components/index"
import testImage from "./../public/testImage.jpg";

export default function Home() {
  return <>
    <div className="wrapper">
      <div className="flex">
        <section className="introduction">
          <h1>Exercise Sessions</h1>
          <p>
            The page(s) on the right contain slides and summaries of my exercise sessions.
          </p>
        </section>
        <section className="session-grid">
          <CourseCard 
            img={testImage}
            title={"Algorithms & Datastructures"} 
            link="sessions/dsa"
          />
        </section>
      </div>
    </div> 
  </>
}
