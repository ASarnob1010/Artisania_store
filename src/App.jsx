import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Products from './components/Admin/Product'
import Orders from './components/Admin/Orders'
import Dashboard from './components/Admin/Dashboard'
import NotFound from './components/NotFound'
import Payments from './components/Admin/Payments'
import Settings from './components/Admin/Settings'
import Customers from './components/Admin/Customers'
import Home from './components/Home'

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin">
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App