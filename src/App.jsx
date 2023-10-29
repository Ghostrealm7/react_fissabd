import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"

import Home from './components/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
  <>
    <div>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  </>
  )
}
