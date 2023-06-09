import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// fonts
// import "./fonts/Fontspring-DEMO-integralcf-bold.otf";
import "./fonts/Fontspring-DEMO-integralcf-regular.otf";
import { Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage/NoPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>

    <div>
      <Routes>
        {/* <Route path="/" element = {} />
        <Route path="/" element = {} /> */}
        <Route path="/" element = {<HomePage />} />
        <Route path="*" element = {<NoPage />} />
      </Routes>
    </div>
  )
}

export default App
