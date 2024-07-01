import './App.css'
import NavBar from './componentes/secoes/NavBar'
import Presentation from './componentes/secoes/presentation'

import Projects from './componentes/secoes/Projects'
import Footer from './componentes/secoes/Footer'
import Sobremim from './componentes/secoes/sobremim'
function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Presentation/>
        <Projects/>
        <Sobremim/>
        <Footer/>
    </div>
  )
}

export default App
