import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container"></div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
