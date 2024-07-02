import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { DataContextProvider } from './Context/DataContext'
import { Resume } from './Pages/Resume'
import './style.css'

function App() {

  return (
    <DataContextProvider>
      <div className='container'>
        <Sidebar />
        <main>
          <Header />
          <Resume/>
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
