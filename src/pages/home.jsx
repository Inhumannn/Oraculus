import { Link } from "react-router-dom"
import Counter from "../components/counter"

function Home(){
   return (
      <>
         <h1>Hello World</h1>
         <Link to="/about">About</Link>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae esse quidem eius! Non velit porro error dolores necessitatibus ducimus expedita alias cum libero, voluptates itaque, eos suscipit sit, maxime deserunt.</p>
         <Counter />
      </>
   )
}

export default Home