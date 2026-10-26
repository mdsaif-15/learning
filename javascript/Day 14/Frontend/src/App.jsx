import { useState } from 'react'
import HeadSection from './Components/LandingPage/HeadSection/HeadSection'
import MidSection from './Components/LandingPage/MidSection/MidSection'
import DiscriptionPage from './Components/DiscriptionPage/DiscriptionPage'
import FooterSection from './Components/LandingPage/FooterSection/FooterSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <HeadSection />
      <MidSection />
      <DiscriptionPage />
      <FooterSection />
    </div>
    </>
  )
}

export default App
