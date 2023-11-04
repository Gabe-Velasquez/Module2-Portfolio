import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
