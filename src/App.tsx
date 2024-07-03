import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { DataContextProvider } from './Context/DataContext'
import { Resume } from './Pages/Resume'
import './style.css'
import { Sells } from './Pages/Sells'
import { Sell } from './Pages/Sell'

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidebar />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/vendas" element={<Sells />} />
              <Route path="/vendas/:id" element={<Sell />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
