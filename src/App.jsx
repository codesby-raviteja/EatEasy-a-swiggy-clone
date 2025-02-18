import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./Components/HeaderRelated/Header"
import LocationContextProvider from "./Components/Hooks/LocationContext"
import Footer from "./Components/OtherComponents/Footer"
function App() {
  return (
    <div className="bg-slate-100">
      <LocationContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </LocationContextProvider>
    </div>
  )
}

export default App
