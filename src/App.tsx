import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { lazy,Suspense } from "react"
const Home = lazy(()=> import("./pages/home"))
const Search = lazy(()=>import("./pages/search"))
const Cart = lazy(()=>import("./pages/cart"))
import Loading  from "./components/loading"
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      </Suspense>
      
    </Router>
    
  )
}

export default App