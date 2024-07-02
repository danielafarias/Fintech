import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Resume } from './Pages/Resume'
import './style.css'

function App() {

  return (
    <div>
        <Sidebar />
        <main>
          <Header />
          <Resume/>
        </main>
    </div>
  )
}

export default App
