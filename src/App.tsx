import { gsap } from "gsap";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { ScrollTrigger , SplitText} from "gsap/all" ;

gsap.registerPlugin(ScrollTrigger , SplitText) ; 

const App = () => {
  return (
    <main className=''>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App