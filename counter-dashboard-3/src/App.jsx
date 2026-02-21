import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleEventOfClick(type) {
    if (type === 'inc') {
      setCount(prev => prev + 1);
    } else if (type === 'dec') {
      setCount(prev => Math.max(prev - 1, 0));
    } else {
      setCount(0);
    }
  }

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount(c => c+1)}>Increment</button>
      <button onClick={() => setCount(c => c-1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br/>

      <p>Click to keep positive integers only</p>
      <button onClick={() => handleEventOfClick('inc')}>Increment</button>
      <button onClick={() => handleEventOfClick('dec')}>Decrement</button>
      <button onClick={() => handleEventOfClick('reset')}>Reset</button>
    </>
  )
}

export default App
