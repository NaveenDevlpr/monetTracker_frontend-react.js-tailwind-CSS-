
import './App.css'
import DashBoard from './components/DashBoard'
import Navbar from './components/Navbar'
function App() {
 
  return (
    <>
     <div className='flex w-full'>
        <Navbar/>
        <main className='grow'>
          <DashBoard/>
        </main>
     </div>
    </>
  )
}

export default App
