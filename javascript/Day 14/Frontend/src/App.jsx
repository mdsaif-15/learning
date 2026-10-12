import { useState } from 'react'
import HeadSection from './Components/HeadSection/HeadSection'
import MidSection from './Components/MidSection/MidSection'
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
