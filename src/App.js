import { Route, Routes } from "react-router-dom"
import { ToastContextProvider } from "./context/ToasterContext"
import { Home } from "./pages/Home"

function App() {
  return (
    <ToastContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ToastContextProvider>
  )
}

export default App
