import { useState } from 'react'
import HeadSection from './Components/LandingPage/HeadSection/HeadSection'
import MidSection from './Components/LandingPage/MidSection/MidSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <HeadSection />
      <MidSection />
    </div>
    </>
  )
}

export default App
