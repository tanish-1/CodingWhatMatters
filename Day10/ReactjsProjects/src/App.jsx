import React, {  useState } from 'react'

 const App = () => {
  // const ElementRef = useRef(null)
  const [name,setName] = useState('')
const handleForm = (e) => {
  e.preventDefault();
console.log('submitted form',name)
setName('')
}

  return (
    <div>
     <form onSubmit={handleForm}>
      <input 
      type="text" 
      className='px-4 rounded py-3 text-xl m-5' 
      id='typeName' 
      value={name} // State controls input value (State → UI)
      onChange={(e)=>{
       setName(e.target.value)  // Input updates state (UI → State)
      }}
      placeholder='Enter The Name' />
      <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
     </form>
      </div>
  )
}

export default App