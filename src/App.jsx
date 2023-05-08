import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Clientes from './components/paginas/Clientes'
import Estudios from './components/paginas/Estudios'
import Proveedores from './components/paginas/Proveedores'
import Home from './components/paginas/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>404 not Found</h1>,
  },
  {
    path: '/clientes',
    element: <Clientes />,
    errorElement: <h1>404 not Found</h1>,
  },
  {
    path: '/estudios',
    element: <Estudios />,
    errorElement: <h1>404 not Found</h1>,
  },
  {
    path: '/proveedores',
    element: <Proveedores />,
    errorElement: <h1>404 not Found</h1>,
  }
])

function App() {
 
  return (
    <RouterProvider router={router} />
  
)

  
}

export default App;
