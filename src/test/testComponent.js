import React, { useState } from 'react'

function App1 () {
  return <h1> hello App1 Jeep</h1>
}
function App2 () {
  return <h1> hello App2 BMW</h1>
}

function Test () {
  const [comp, setcomp] = useState()
  return (
    <>
      <button onClick={()=>setcomp(1)}>Choose app 1</button>
      <button onClick={()=>setcomp(2)}>Choose app 2</button>
      {comp === 1 && <App1 />}
      {comp === 2 && <App2 />}
    </>
  )
}

export default Test
