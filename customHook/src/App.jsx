import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useLocalStorage, useSessionStorage} from 'react-use-storage'
import './App.css'

function App() {
const[data,setData]=useState("")
const[local,setLocal]=useLocalStorage("")
const[session,setSession]=useSessionStorage("")
const handleClick=((e)=>{
  var value=e.target.value
  setData(value)
  setLocal(value)
  setSession(value)
})

  return (
    <div>
      <input style={{height:"29px",width:"15%"}} onChange={handleClick} type="text" value={data} />
    </div>
  )
}

export default App
