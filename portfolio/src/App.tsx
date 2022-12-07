import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TextEffect1 from './TextEffect'
import TextEffect2 from './TextEffect2'

function App() {
  const [count, setCount] = useState(0)
function handleClick(){
  alert('hi')
}
  return (
  <div className="h-screen" id='tv-static'>
    <TextEffect1></TextEffect1>

</div>
  )
}

export default App
