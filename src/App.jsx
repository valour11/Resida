import { useState } from 'react'
import Header from './shared/Header/Header'
import OurExperience from './components/ourExperience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <OurExperience/>
    </>
  )
}

export default App
