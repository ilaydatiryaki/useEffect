
import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log('component did mount');
  }, []);

  return (
    <div>
      React app
    </div>
  )
}

export default App
