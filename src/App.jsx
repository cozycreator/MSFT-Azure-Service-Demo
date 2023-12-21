import { useState } from 'react'
import './App.css'

function App() {

  const [names, setNames] = useState([]);

  return (
    <div className="bg-white p-36 flex flex-col justify-center items-center gap-8">

      <h1 className="text-2xl">Test App</h1>
      <div className='flex flex-col gap-3 w-full items-center'>
        <input id="first-name" type="text" className="border border-gray-400 rounded-md p-2 w-96" placeholder='First Name' />
        <input id="last-name" type="text" className="border border-gray-400 rounded-md p-2 w-96" placeholder='Last Name' />
      </div>
      <div className="flex flex-row gap-4 items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
          if (document.getElementById('first-name').value === '' || document.getElementById('last-name').value === '') {
            alert("Please fill in values")
            return;
          }
          setNames([...names, document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value])
        }}>
          Submit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
          document.getElementById('first-name').value = ''
          document.getElementById('last-name').value = ''
        }}>
          Cancel
        </button>

      </div>


      <br></br>

      {names.map((name, ) => (
        <h1 key={name}>{name}</h1>
      ))}

      {names.length > 0 &&
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
          setNames([])
        }}>
          Clear
        </button>
      }
    </div>
  )
}

export default App
