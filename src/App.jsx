import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className='App'>
      <header/>
      <main>
      <Outlet/>
      </main>
      <footer/>
    </div>
  )
}

export default App
