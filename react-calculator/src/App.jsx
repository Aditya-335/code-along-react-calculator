import {useState} from 'react'
import Keys from  './components/Keys';
import './App.css'

function App() {

  const [name,setName] = useState("")

  return (
    <div>
      <Keys name ={name} setName = {setName} />
    </div>
  )
}

export default App