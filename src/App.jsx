import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Catalogo from "./components/catalogo/Catalogo"
import Contactos from "./components/contactos/Contactos"
import Footer from "./components/footer/Footer"
import Body from "./components/body/Body"
const App = () => {
  return (
    <div className="bg-yellow-200">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
    // Cada componente debe tener su carpeta 
  )
}

export default App