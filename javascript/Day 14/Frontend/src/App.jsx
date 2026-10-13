import { useState } from 'react'
import HeadSection from './Components/LandingPage/HeadSection/HeadSection'
import MidSection from './Components/LandingPage/MidSection/MidSection'
import DiscriptionPage from './Components/DiscriptionPage/DiscriptionPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <HeadSection />
      <MidSection />
      <DiscriptionPage />
    </div>
    </>
  )
}

export default App
