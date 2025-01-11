import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Maintenance Mode</h1>
        <p className="text-lg text-gray-300">
          We apologize for any inconvenience. Please check back later.
        </p>
      </div>
    </div>
  )
}

export default App
