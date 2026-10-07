import { useState } from 'react'
import HeadSection from './Components/HeadSection/HeadSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <HeadSection />
    </div>
    </>
  )
}

export default App
